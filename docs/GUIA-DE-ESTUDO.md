# Guia de estudo

## 1. Entenda o caminho dos dados

Abra `src/data/portfolio.ts`, depois `src/app/projetos/page.tsx` e, por último,
`src/components/project-card.tsx`.

O primeiro arquivo descreve os projetos. A página percorre o array com `map()` e
entrega um projeto por vez ao componente. O componente recebe o conteúdo pelas
props e desenha a mesma estrutura para cada item.

O tipo `Project` documenta quais propriedades um card aceita. `satisfies` verifica
o formato do array sem descartar a inferência específica de seus dados.

Exercício: adicione um quinto projeto em `portfolio.ts`. Não altere o componente.
Depois remova o `title` desse projeto e observe o erro do TypeScript.

## 2. Entenda as rotas

No App Router, uma pasta representa um segmento da URL e um `page.tsx` representa
uma página navegável. Por isso `app/projetos/page.tsx` responde por `/projetos`.

`layout.tsx` envolve todas as páginas. Ele carrega as fontes, declara o idioma,
monta o cabeçalho e o rodapé, e recebe a página atual em `children`.

O componente `Link` do Next é usado nos links internos. Os contatos são links
HTML (`a`), pois apontam para outros sites ou para `mailto:`.

Exercício: crie `app/experimentos/page.tsx` e adicione a rota à navegação central.

## 3. Separe conteúdo de interação

As páginas são Server Components por padrão. Elas não precisam de `useState`
para renderizar textos e arrays.

`site-header.tsx` usa `"use client"` porque precisa de estado, eventos, referências
a elementos e acesso ao documento para fechar o menu com Escape ou clique fora.
Os listeners são removidos no retorno do efeito: isso evita listeners duplicados.

O menu é uma expansão de navegação, não um modal. O teclado continua na ordem
normal de Tab, o botão anuncia `aria-expanded`, e Escape devolve o foco ao botão.

O rodapé também é Client Component porque consulta a rota com `usePathname` para
não repetir os links sociais na página de Contato.

Exercício: abra o menu no celular e navegue usando apenas Tab, Shift+Tab e Escape.

## 4. Leia o Tailwind do menor para o maior

```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
```

- `grid`: usa CSS Grid.
- `grid-cols-1`: uma coluna na configuração base, incluindo celular.
- `gap-6`: 24px de distância entre os itens, na escala padrão.
- `md:grid-cols-2`: duas colunas a partir de 768px.
- `md:gap-8`: 32px de distância a partir desse mesmo breakpoint.

O breakpoint se relaciona à largura disponível em pixels CSS. A resolução física
do aparelho, isoladamente, não determina qual layout ele recebe.

Exercício: altere o breakpoint da grade de `md:` para `lg:` e observe a mudança.

## 5. Entenda o tema

`@theme inline` em `globals.css` define os tokens que geram utilitários.
`--color-accent` permite escrever `text-accent`, `bg-accent` e `border-accent`.

As variáveis `--font-inter` e `--font-space-grotesk` são declaradas pelo
`next/font/local` no layout. O Tailwind as associa a `font-sans` e `font-heading`.

Exercício: altere apenas `--color-accent` e veja todos os destaques mudarem.

## 6. Estude o layout vertical

O body usa `flex min-h-svh flex-col`. O main usa `flex-1` para ocupar o espaço
restante entre cabeçalho e rodapé. O main também é um grid, para sua página filha
poder ocupar a altura disponível.

A home usa `flex items-center`: a apresentação fica centralizada verticalmente.
As páginas de projetos e sobre usam espaçamento vertical e crescem naturalmente.
Não há altura fixa nos cards nem posicionamento absoluto no conteúdo principal.

Exercício: aumente bastante a descrição de um projeto e observe a adaptação.

## 7. Confira antes de alterar mais coisas

```bash
npm run typecheck
npm run build
```

O primeiro comando verifica tipos; o segundo testa a compilação para produção.
Nenhum deles substitui conferir o visual no navegador.

Na ferramenta de desenvolvimento do navegador, experimente larguras de 320,
390, 768, 1366 e 1920px. Verifique quebra de textos, rolagem vertical e navegação.
Teste também o zoom em 200%, o teclado e o download do currículo.

## Próximos exercícios

1. Crie uma rota individual de projeto com `[slug]` e `generateStaticParams`.
2. Implemente busca local por nome ou tecnologia na página de projetos.
3. Adicione um campo opcional de repositório ao tipo `Project` e mostre um link
   somente quando o dado existir.
4. Adicione um tema claro com contraste adequado e preferência persistida.

Esses recursos foram deixados como exercícios para manter a base enxuta.
