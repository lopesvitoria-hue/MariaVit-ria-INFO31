# Atividade — Primeira página Web

Trabalhe em dupla. O diagnóstico é apenas para orientar o apoio durante a disciplina e **não vale nota**.

> **Como acompanhar os slides:** o material já contém uma versão funcional da página. Em vez de recriar todos os arquivos, localize os trechos apresentados, explique o papel de cada um e faça as adaptações solicitadas. Nos slides, `#btn` corresponde a `#acao`; `.status` é a classe de estilo e `#status` é o identificador usado pelo JavaScript.

## Parte 1 — Mapa de pré-requisitos

Preencha individualmente [`docs/mapa-pre-requisitos.md`](./docs/mapa-pre-requisitos.md). Marque somente uma situação por eixo:

- 🟢 **Verde:** consigo explicar ou fazer sem ajuda;
- 🟡 **Amarelo:** consigo com alguma orientação;
- 🔴 **Vermelho:** ainda preciso aprender desde o início.

## Parte 2 — Observar o fluxo Web

1. Escolha uma forma de iniciar o servidor:

   **Com npm/npx:**

   ```powershell
   npx serve .
   ```

   **Com Python 3 no Windows:**

   ```powershell
   py -m http.server 8000
   ```

   Se `py` não for reconhecido:

   ```powershell
   python -m http.server 8000
   ```

2. Anote a rota escolhida: `[ ] npm/npx` ou `[ ] Python`.
3. Abra a URL informada no terminal.
4. Não abra o HTML por duplo clique: a página deve usar `http://`.
5. Use o painel **Network** para localizar os três recursos do projeto.
6. Use o painel **Elements** para localizar o botão `#acao` e a mensagem `#status`.
7. Clique no botão e explique por que o texto mudou sem que o arquivo `index.html` fosse reescrito.

## Parte 3 — Adaptar o protótipo

Faça pequenas alterações relacionadas à proposta da equipe:

1. personalize o título e a descrição em `index.html`;
2. escolha uma cor de destaque em `css/style.css`;
3. personalize a mensagem produzida por `js/app.js`;
4. adapte as três histórias de [`docs/backlog.md`](./docs/backlog.md).

Após cada mudança, salve o arquivo e valide novamente no navegador e no Console.

As histórias exibidas nos slides representam temas gerais. Para esta entrega, adapte e priorize as três histórias que já estão em `docs/backlog.md`.

## Parte 4 — Registrar o primeiro incremento

Use `git status` para revisar os arquivos e crie o primeiro commit:

```powershell
git add .
git commit -m "feat: cria primeira pagina web interativa"
git log -1 --oneline
```

## Definição de pronto

- [🟢] página aberta por HTTP usando npm/npx ou Python;
- [🟢] HTML, CSS e JavaScript em arquivos separados;
- [🟢] estilo aplicado;
- [🟢] clique alterando o DOM;
- [🟢] requisições visíveis no Network;
- [🟢] Console sem erros;
- [🟢] mapa de pré-requisitos preenchido;
- [🟢] três histórias priorizadas no backlog;
- [🟢] primeiro commit visível em `git log -1 --oneline`.

## Ticket de saída

Responda em até quatro linhas:

1. Quem iniciou a requisição e quem respondeu? O navegador iniciou a requisição HTTP e o servidor local, executado com npx, respondeu enviando os arquivos da página.
2. Qual é a diferença entre o arquivo HTML e o DOM observado no navegador?O HTML é o arquivo original da página, enquanto o DOM é a representação criada pelo navegador, que pode ser modificada pelo JavaScript sem alterar o arquivo HTML.
3. Qual evidência prova que a equipe concluiu o primeiro incremento?A evidência é o commit exibido pelo comando git log -1 --oneline: 024c4b7 feat: cria primeira pagina web interativa.
4. Qual rota de execução a equipe utilizou: npm/npx ou Python? a rota npm/npx, com o comando npx serve .
