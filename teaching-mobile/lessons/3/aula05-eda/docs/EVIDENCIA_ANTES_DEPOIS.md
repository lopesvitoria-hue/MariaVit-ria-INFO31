# Evidência antes/depois

## ANTES (Aula 4)
- Interface funcional mas com apenas textos desorganizados
- Sem imagem de contexto (usuários visuais perdiam referência visual)
- Botão sem feedback pressed (usuário incerto se tocou)
- Sem labels acessíveis adequados (leitores de tela não tinham contexto)
- Layout denso, sem hierarquia visual clara

## DEPOIS (Aula 5)
- Cabeçalho com imagem (painel-didatico.png) + textos estruturados
- Botão com feedback visual pressed (opacity + mudança de cor)
- Labels acessíveis completos e contextuais
- Layout flexbox claro: imagem ao lado de textos (row), espaçamento com gap
- Hierarquia visual: marca em vermelho, título em verde, descrição cinza
- Estado importante (ativo/inativo) comunicado por texto + cor + fundo

## Mudanças principais realizadas

1. **M2 - Layout**: Implementação de `flexDirection: "row"` no cabeçalho, com `Image` (60×60 dp) + `flex: 1` no container de textos
2. **M3 - Interação**: Pressable com feedback pressed (mudança de opacity), colors para estado ativo, hitSlop configurado
3. **M3 - Acessibilidade**: `accessibilityLabel` contextual, `accessibilityRole="button"`, `accessibilityState` definido

## Lógica mantida da Aula 4
- Filtro de indicadores por situação
- Formatação de valores com unidade
- Tipagem completa (IndicadorEDA)
- Componente CartaoIndicador (informativo, não acionável)
- Dados fictícios de IFMA
