# M1 — Scanner de Barreiras

**Regra:** durante os primeiros 60 segundos, não altere o código. Use o app.

| # | Barreira observada | Evidência concreta | Quem pode ser prejudicado? | Prioridade |
|---|---|---|---|---|
| 1 | Falta de feedback visual ao toque | Ao pressionar, não há mudança imediata de cor, opacidade ou escala. Usuário fica incerto se tocou | Usuários com deficiência motora; usuários em ambientes com pouca luz | alta |
| 2 | Ausência de imagem de contexto | Interface só com texto, sem visual que comunique o tema "EDA" e permanência estudantil | Usuários com baixa letramento visual; usuários que preferem pistas visuais | alta |
| 3 | Tamanho de alvo de toque pequeno | Botão pode ter menos de 48×48 dp (padrão Android). Difícil acertar em dispositivos pequenos | Usuários com deficiência motora; crianças; idosos | alta |
| 4 | Falta de semântica acessível | Botão sem accessibilityLabel, accessibilityRole ou hint. Leitor de tela não comunica ação contextualmente | Usuários cegos; usuários com baixa visão; leitores de tela | alta |

## Duas barreiras que vamos corrigir primeiro

1. Imagem de contexto (M2 - melhora legibilidade e hierarquia)
2. Feedback visual e semântica acessível (M3 - melhora operacionalidade e acessibilidade)

## Perguntas de apoio

- O que parece acionável?
- O toque dá uma resposta perceptível?
- Algum estado importante depende só de cor?
- O conteúdo está apertado ou sem hierarquia?
- A ação teria um nome compreensível para um leitor de tela?
- O alvo de toque parece pequeno?
