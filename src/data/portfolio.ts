
export const portfolio = {
  name: "Bruno Oliveira Santos",
  role: "Full Stack / Back-end",
  tagline: "Aplicações web, mobile e integrações.",
  email: "bruno.os230@gmail.com",
  github: "https://github.com/bbruno110",
  githubUsername: "@bbruno110",
  linkedin: "https://www.linkedin.com/in/bruno-oliveira-santos-333b791b1/",
  resume: "/curriculo-bruno.pdf",
  copyrightYear: 2026,
  about: [
    "Sou Bruno, desenvolvedor Full Stack / Back-end com mais de 5 anos de experiência em aplicações web e mobile, APIs REST e integrações entre sistemas corporativos.",
    "Atuo da análise de requisitos à implementação e manutenção de soluções para processos financeiros, fiscais, contábeis e operacionais, com foco em dados e automação.",
  ],
  technologyGroups: [
    ["Node.js", "TypeScript", "Python", "FastAPI"],
    ["React", "Next.js", "React Native", "Expo"],
    ["Oracle SQL/PLSQL", "PostgreSQL", "SQL Server"],
  ],
  education: {
    title: "Sistemas de Informação",
    detail: "Bacharelado · UNIFTC · 2026",
  },
} as const;

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
};

export const projects = [
  {
    id: "nfse",
    title: "Integração de NFS-e",
    description:
      "Serviço em Node.js e TypeScript para emissão de NFS-e e integração fiscal com o ambiente da prefeitura.",
    technologies: ["Node.js", "TypeScript"],
  },
  {
    id: "ordens-de-servico",
    title: "App de Ordens de Serviço",
    description:
      "Aplicativo para consulta, acompanhamento e atualização de Ordens de Serviço, integrado ao ERP Tasy/Philips.",
    technologies: ["React Native", "Expo"],
  },
  {
    id: "totvs-tasy",
    title: "TOTVS + Tasy",
    description:
      "Integração de processos de RH, financeiro e contabilidade, com validação de dados e tratamento de inconsistências.",
    technologies: ["Oracle PL/SQL", "TOTVS", "Tasy/Philips"],
  },
  {
    id: "visao-computacional",
    title: "Visão computacional com YOLO",
    description:
      "Treinamento de modelos e processamento de imagens com Python, YOLOv4 e YOLOv8 em iniciativa de inovação.",
    technologies: ["Python", "YOLOv4", "YOLOv8"],
  },
] as const satisfies readonly Project[];
