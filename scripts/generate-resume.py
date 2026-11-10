"""Gera o PDF do currículo com o estilo visual do portfólio.

Requisito: python -m pip install reportlab
Uso: python scripts/generate-resume.py
"""

from __future__ import annotations

import argparse
import json
import os
from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
)


ROOT = Path(__file__).resolve().parents[1]
INK = colors.HexColor("#27272a")
GREEN = colors.HexColor("#385213")
MUTED = colors.HexColor("#52525b")


def register_fonts() -> tuple[str, str]:
    windows_fonts = Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts"
    candidates = [
        (Path("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
         Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")),
        (windows_fonts / "arial.ttf", windows_fonts / "arialbd.ttf"),
        (Path("/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf"),
         Path("/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf")),
    ]
    for regular, bold in candidates:
        if regular.is_file() and bold.is_file():
            pdfmetrics.registerFont(TTFont("Resume", str(regular)))
            pdfmetrics.registerFont(TTFont("Resume-Bold", str(bold)))
            pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="Resume-Bold")
            return "Resume", "Resume-Bold"
    return "Helvetica", "Helvetica-Bold"


def generate(output: Path) -> None:
    data = json.loads((ROOT / "scripts/resume.json").read_text(encoding="utf-8-sig"))
    regular, bold = register_fonts()
    styles = {
        "name": ParagraphStyle("name", fontName=bold, fontSize=20, leading=25,
                               textColor=colors.HexColor("#09090b"), spaceAfter=5),
        "headline": ParagraphStyle("headline", fontName=bold, fontSize=9, leading=13,
                                   textColor=GREEN, spaceAfter=10),
        "contact": ParagraphStyle("contact", fontName=regular, fontSize=8.5, leading=13,
                                  textColor=MUTED),
        "section": ParagraphStyle("section", fontName=bold, fontSize=9, leading=13,
                                  textColor=GREEN, spaceBefore=17, spaceAfter=9,
                                  keepWithNext=True),
        "body": ParagraphStyle("body", fontName=regular, fontSize=9.5, leading=14,
                               textColor=INK, spaceAfter=7),
        "skill": ParagraphStyle("skill", fontName=regular, fontSize=9, leading=13,
                                textColor=INK, spaceAfter=4),
        "title": ParagraphStyle("title", fontName=bold, fontSize=9.5, leading=14,
                                textColor=INK, spaceAfter=2, keepWithNext=True),
        "meta": ParagraphStyle("meta", fontName=regular, fontSize=8.5, leading=12,
                               textColor=MUTED, spaceAfter=6, keepWithNext=True),
        "bullet": ParagraphStyle("bullet", fontName=regular, fontSize=9, leading=13,
                                 textColor=INK, leftIndent=9, firstLineIndent=-9,
                                 spaceAfter=4),
        "project": ParagraphStyle("project", fontName=regular, fontSize=9, leading=13,
                                  textColor=INK, spaceAfter=9),
        "course": ParagraphStyle("course", fontName=regular, fontSize=9, leading=13,
                                 textColor=INK, spaceAfter=4),
    }

    def para(text: str, kind: str = "body") -> Paragraph:
        return Paragraph(escape(text), styles[kind])

    def section(title: str) -> Paragraph:
        return para(title, "section")

    def experience(job: dict) -> KeepTogether:
        return KeepTogether([
            para(f"{job['company']} - {job['role']}", "title"),
            para(f"{job['location']} | {job['period']}", "meta"),
            *[para(f"- {item}", "bullet") for item in job["bullets"]],
        ])

    person = data["personal"]
    story = [para(person["name"], "name"), para(person["headline"], "headline")]
    story.append(Paragraph(
        f"{escape(person['location'])} | {escape(person['phone'])} | "
        f'<link href="mailto:{escape(person["email"], quote=True)}">{escape(person["email"])}</link>',
        styles["contact"],
    ))
    github = person["github"].removeprefix("https://")
    linkedin = person["linkedin"].removeprefix("https://www.").rstrip("/")
    story.extend([
        Paragraph(f'<link href="{escape(person["github"], quote=True)}">{escape(github)}</link>', styles["contact"]),
        Paragraph(f'<link href="{escape(person["linkedin"], quote=True)}">{escape(linkedin)}</link>', styles["contact"]),
        section("PERFIL"),
        *[para(part) for part in data["summary"].split("\n\n")],
        section("TECNOLOGIAS"),
    ])
    for skill in data["skills"]:
        story.append(Paragraph(
            f"<b>{escape(skill['category'])}:</b> {escape(' | '.join(skill['items']))}",
            styles["skill"],
        ))
    story.extend([
        section("EXPERIÊNCIA PROFISSIONAL"),
        experience(data["experience"][0]),
        PageBreak(),
        section("EXPERIÊNCIA PROFISSIONAL (CONTINUAÇÃO)"),
        *[experience(job) for job in data["experience"][1:]],
        section("PROJETOS SELECIONADOS"),
    ])
    for project in data["projects"]:
        story.append(KeepTogether([
            para(project["name"], "title"),
            para(project["description"], "project"),
        ]))
    story.append(section("FORMAÇÃO"))
    for education in data["education"]:
        story.append(KeepTogether([
            para(education["course"], "title"),
            para(f"{education['institution']} - {education['period']}", "body"),
        ]))
    story.append(section("CURSOS E CERTIFICAÇÕES"))
    story.extend(para(f"- {course}", "course") for course in data["certifications"])

    def page_decoration(canvas, doc) -> None:
        width, height = A4
        canvas.saveState()
        canvas.setTitle("Bruno Oliveira Santos | Currículo profissional")
        canvas.setAuthor("Bruno Oliveira Santos")
        canvas.setSubject("Experiência, tecnologias, projetos, formação e certificações")
        if doc.page > 1:
            canvas.setFont(bold, 9)
            canvas.setFillColor(INK)
            canvas.drawString(50, height - 35, "BRUNO OLIVEIRA SANTOS")
            canvas.setFont(regular, 8)
            canvas.setFillColor(MUTED)
            canvas.drawRightString(width - 50, height - 35, "Full Stack / Back-end")
        canvas.setStrokeColor(colors.HexColor("#d4d4d8"))
        canvas.setLineWidth(0.6)
        canvas.line(44, 41, width - 44, 41)
        canvas.setFillColor(colors.HexColor("#71717a"))
        canvas.setFont(regular, 8)
        canvas.drawString(44, 28, "Bruno Oliveira Santos | Currículo profissional")
        canvas.drawRightString(width - 44, 28, str(doc.page))
        canvas.restoreState()

    output.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(output), pagesize=A4, leftMargin=44, rightMargin=44,
        topMargin=44, bottomMargin=53,
    )
    document.build(story, onFirstPage=page_decoration, onLaterPages=page_decoration)
    print(f"PDF gerado: {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "public/curriculo-bruno.pdf")
    args = parser.parse_args()
    generate(args.output.resolve())
