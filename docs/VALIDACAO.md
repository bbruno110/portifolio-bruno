# Validação desta entrega

## Verificações concluídas

- `npm install`: dependências instaladas; `package-lock.json` incluído.
- `npm run build`: build de produção concluído com Next.js 16.4.5.
- `npm run typecheck`: verificação de TypeScript concluída sem erros.
- HTML gerado das quatro rotas: uma heading principal em cada página e conteúdo esperado.
- Textos renderizados: sem localização, empregador ou rótulos de acesso aos projetos.
- Currículo: arquivo PDF válido de uma página, fontes incorporadas e renderização revisada.
- Fontes: dois arquivos WOFF2 locais com suas licenças.

## Limite da validação

A prévia gerenciada deste ambiente acrescentou argumentos incompatíveis com o
CLI do Next.js (`--host` e `--strictPort`). Por isso ela não iniciou, e não foi
possível concluir a inspeção visual ou os testes de interação no navegador aqui.
O código padrão de desenvolvimento do Next foi preservado no projeto.

Depois de executar `npm run dev` no seu computador, confira:

1. As quatro páginas em 320px, 390px, 768px, 1366px e 1920px de largura.
2. A abertura do menu, navegação por links, fechamento por clique fora e Escape.
3. A navegação por teclado e o link de pular ao conteúdo.
4. O download do PDF na página Sobre.
5. Os links de e-mail, LinkedIn e GitHub.

O build e os tipos aprovados não equivalem a testes visuais ou de interação.
