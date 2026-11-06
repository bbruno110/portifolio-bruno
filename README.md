# Portfólio de Bruno Oliveira Santos

Projeto de estudo em **Next.js (App Router), React, TypeScript e Tailwind CSS 4**.
Reproduz o visual minimalista preto, branco e verde neon desenvolvido como referência.

## Rodar no seu computador

Pré-requisito: **Node.js 22 ou superior**. A versão usada na validação foi a 24.

1. Extraia o ZIP.
2. Abra a pasta `portfolio-bruno` no VS Code.
3. Abra um terminal nessa pasta e execute:

```bash
npm ci
npm run dev
```

Abra **http://localhost:3000**. Se essa porta estiver ocupada, o Next informa outra no terminal.
Os comandos funcionam também no PowerShell do Windows.

Para verificar e executar a versão de produção:

```bash
npm run typecheck
npm run build
npm start
```

`npm start` precisa de um build concluído. Não execute `npm run dev` e `npm start`
simultaneamente na mesma porta.

Não é necessário banco de dados, chave de API ou arquivo `.env`.
O download das dependências no primeiro `npm ci` precisa de internet.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Nome, especialidade, apresentação curta e botão de projetos |
| `/projetos` | Quatro cards com descrições e tecnologias |
| `/sobre` | Perfil, tecnologias, formação e download do currículo |
| `/contato` | Links reais para e-mail, LinkedIn e GitHub |

URLs inexistentes usam a página `not-found.tsx`.

## Onde editar

```text
portfolio-bruno/
  public/
    curriculo-bruno.pdf          Resumo profissional para download
  src/
    app/
      fonts/                    Fontes locais e licenças OFL
      globals.css               Cores, fontes e estilos globais
      layout.tsx                Estrutura compartilhada e metadados
      page.tsx                  Página inicial
      projetos/page.tsx         Projetos
      sobre/page.tsx            Sobre
      contato/page.tsx          Contato
      not-found.tsx             Página 404
      icon.svg                  Favicon
    components/
      container.tsx             Largura e margens consistentes
      site-header.tsx           Navegação desktop e mobile
      site-footer.tsx           Rodapé
      page-heading.tsx          Títulos de página
      project-card.tsx          Card reutilizável
      text-link.tsx             Link externo ou de e-mail
      icons.tsx                 Ícones SVG pequenos
    data/
      portfolio.ts              Textos, tecnologias, contatos e projetos
  docs/
    GUIA-DE-ESTUDO.md            Explicação e exercícios
    DESIGN.md                   Medidas e decisões visuais
```

### Alterar conteúdo

Edite `src/data/portfolio.ts`. O nome da apresentação da home é dividido em linhas
no `src/app/page.tsx`; altere esse título também se for adaptar para outra pessoa.

Os cards apresentam os trabalhos sem indicar acesso aos repositórios. Eles não
possuem botões fictícios de demo ou de código. O link do GitHub aparece apenas
como perfil pessoal no contato e no rodapé.

O texto do Sobre não apresenta cidade, estado ou empregador.

### Alterar currículo

Substitua `public/curriculo-bruno.pdf` pelo seu PDF completo, mantendo o nome do
arquivo. O PDF incluído é um resumo de uma página baseado nas informações
fornecidas para o portfólio. Não precisa recompilar a interface para trocar esse
arquivo em desenvolvimento.

### Alterar cores

Os tokens estão no `@theme inline` de `src/app/globals.css`:

```css
--color-background: #09090b;
--color-foreground: #f5f5f5;
--color-muted: #a1a1aa;
--color-accent: #b6ff3b;
--color-line: #29292e;
```

Eles geram classes como `bg-background`, `text-muted` e `border-line`.
Este projeto usa Tailwind **4**: não precisa de `tailwind.config.js` para esses tokens.

### Fontes

**Space Grotesk** nos títulos e **Inter** nos textos, carregadas com `next/font/local`.
As fontes WOFF2 estão incluídas no projeto. Isso mantém as famílias do design e
evita que o build dependa de uma consulta ao Google Fonts. As licenças SIL Open
Font License estão ao lado dos arquivos de fonte.

## Responsividade e acessibilidade

- Conteúdo limitado a 1.200px úteis e margens laterais de pelo menos 24px.
- Uma coluna de projetos no celular, duas a partir de 768px.
- Cabeçalho com botão de menu no celular e navegação completa no desktop.
- O menu fecha ao navegar, clicar fora dele ou pressionar Escape.
- Botões com área mínima de 44px; foco de teclado visível.
- Link para pular diretamente ao conteúdo.
- Links externos avisam leitores de tela sobre a abertura em nova aba.
- Rodapé acompanha o fluxo da página; páginas longas rolam normalmente.
- Preferência por movimento reduzido respeitada.

## Para estudar

Comece por `docs/GUIA-DE-ESTUDO.md`. O projeto foi mantido pequeno de propósito:
não utiliza biblioteca de componentes, gerenciador global de estado, animações
complexas ou dependências para ícones.

## Referências oficiais

- [Next.js App Router](https://nextjs.org/docs/app)
- [Fontes no Next.js](https://nextjs.org/docs/app/getting-started/fonts)
- [Temas no Tailwind](https://tailwindcss.com/docs/theme)
- [Responsividade no Tailwind](https://tailwindcss.com/docs/responsive-design)
- [React](https://react.dev/learn)
