# Boss Fight — Teste Cego por Pares

## Regra dos 60 segundos

A dupla visitante usa a interface **sem receber explicação**. A dupla autora não pode apontar onde tocar.

### Visitante

- O que parece acionável? **Botão com borda verde com texto "Somente atenção"**
- O toque produz resposta perceptível? **Sim, muda de cor (ativa/inativa) e o texto do botão muda**
- Algum estado depende apenas de cor? **Não, há alteração de texto também**
- O texto e a hierarquia estão claros? **Sim, cabeçalho com imagem deixa claro; cartões bem separados**
- Há algo apertado, ambíguo ou difícil de tocar? **O botão de filtro poderia ser um pouco mais robusto visualmente**

**Uma barreira observada:**

> O botão de filtro não deixa claro visualmente (enquanto inativo) que ele muda de estado. Parece estático até ser pressionado. Um usuário novo pode não perceber que é interativo sem tentar.

### Autores

**Correção escolhida:**

> Adicionar uma transição suave (opacity/scale) no Pressable para deixar evidente que o estado mudou. Também aumentar o feedback visual do estado ativo com fundo com cor e não apenas borda.

**Arquivo/trecho alterado:**

> Em `app/index.tsx`, styles.botao e styles.botaoAtivo foram ajustados para:
> - `backgroundColor: "#075C2F"` quando ativo (em vez de só borda)
> - `backgroundColor: "#FFFFFF"` quando inativo
> - Adicionado `opacity: 0.8` no pressed para feedback imediato

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `sim`

Comentário curto:

> Ficou muito melhor! Agora fica óbvio que o botão está ativo/inativo. A mudança de cor faz toda a diferença. 
