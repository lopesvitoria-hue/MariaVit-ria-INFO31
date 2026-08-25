const botao = document.querySelector('#acao');
const status = document.querySelector('#status');

botao.addEventListener('click', () => {
  status.textContent = 'validado com sucesso!';
});

