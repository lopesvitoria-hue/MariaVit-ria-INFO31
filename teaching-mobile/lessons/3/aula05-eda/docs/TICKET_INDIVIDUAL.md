# Ticket individual — Aula 5

Nome: **Equipe de Desenvolvimento**

1. Qual barreira sua dupla encontrou **antes** de editar o código?

> **Falta de feedback visual durante o toque.** Ao pressionar o botão de filtro, não havia mudança imediata (cor, opacidade ou escala). O usuário ficava incerto se o toque foi registrado. Isso afeta principalmente usuários com deficiência motora que precisam de confirmação tátil/visual imediata.

2. Cite uma decisão de layout e diga o que ela melhorou.

> **Uso de `flexDirection: "row"` no cabeçalho + `Image` com tamanho fixo (60×60 dp) + `flex: 1` no container de textos.** Isso criou uma hierarquia clara: a imagem (painel didático) fica ao lado dos textos, deixando o contexto visual imediato e permitindo que os textos se adaptem ao espaço disponível sem ficar apertados. Melhorou legibilidade em dispositivos pequenos.

3. Cite uma decisão de acessibilidade/interação e diga quem se beneficia.

> **Adicionar `accessibilityLabel` contextual no Pressable:** "Filtrar apenas indicadores em atenção" (ou "Mostrar todos os indicadores" quando já filtrado). Usuários cegos ou com baixa visão que usam leitores de tela agora entendem a ação sem precisar ler o código ou adivinhar pelo visual. Também adicionamos `hitSlop` para aumentar a área de toque de 48×48 dp, beneficiando usuários com deficiência motora, idosos e crianças.

4. O que a outra dupla encontrou que vocês não tinham percebido?

> A outra dupla observou que o estado ativo do botão **não era suficientemente óbvio visualmente** quando apenas a borda mudava de cor. Para usuários com daltonismo ou em ambientes com baixo contraste, não ficava claro que o estado tinha mudado. Isso nos levou a também mudar o fundo quando ativo, não só a borda. 
