# Especificação visual

## Paleta

| Token | HEX | Uso |
| --- | --- | --- |
| `background` | `#09090B` | Fundo da página e dos cards |
| `foreground` | `#F5F5F5` | Nome, títulos e texto principal |
| `muted` | `#A1A1AA` | Descrições, tecnologias e rodapé |
| `accent` | `#B6FF3B` | Botão principal, ponto e rota ativa |
| `line` | `#29292E` | Bordas e divisórias |

O fundo é sempre escuro. Não há sombras, texturas, brilhos ou gradientes.

## Tipografia

| Elemento | Fonte | Celular | Desktop |
| --- | --- | --- | --- |
| Logo | Space Grotesk 700 | 28px | 32px |
| Nome | Space Grotesk 700 | 40-48px, conforme a largura | 72-88px |
| Título de página | Space Grotesk 700 | 40px | 64px |
| Título de card | Space Grotesk 600 | 24px | 28px em telas grandes |
| Frase da inicial | Inter 400 | 18px | 24px |
| Texto de projeto | Inter 400 | 16px | 18px |
| Texto do Sobre | Inter 400 | 18px | 22px |
| Rodapé | Inter 400 | 14px | 14px |
| Especialidade | Monoespaçada do sistema | 12px | 14px |

Os títulos grandes usam entrelinha de aproximadamente 1,05 e espaçamento entre
letras de -0,04em. Os parágrafos usam entrelinha de 1,625.

## Espaçamento

- Largura máxima externa: 1.248px, com 24px de padding de cada lado.
- Conteúdo útil máximo: 1.200px.
- Cabeçalho: 80px no celular e 96px no desktop.
- Página interna: 48px de padding vertical no celular e 80px no desktop.
- Grade: 24px de intervalo no celular e 32px no desktop.
- Card: padding de 24px no celular e 32px no desktop; borda de 1px; raio de 8px.
- Botão: pelo menos 48px de altura, padding horizontal de 24px e raio de 4px.

## Breakpoints utilizados

| Prefixo | Largura mínima | Uso principal |
| --- | --- | --- |
| Base | 0 | Celular e uma coluna |
| `sm:` | 640px | Nome deixa de quebrar entre Bruno e Oliveira |
| `md:` | 768px | Navegação completa, duas colunas e tipografia maior |
| `lg:` | 1024px | Títulos de cards maiores |
| `xl:` | 1280px | Nome da home em 88px |

Não há breakpoint específico para Full HD: a largura máxima mantém o conteúdo
centralizado e o espaço extra vira margem. As medidas assumem 1rem igual a 16px.
