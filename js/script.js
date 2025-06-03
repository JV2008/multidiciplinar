
const botao = document.getElementById('mat');

botao.addEventListener('mouseover', () => {
  botao.textContent = 'FUNÇÕES E GRÁFICOS';
});

botao.addEventListener('mouseout', () => {
  botao.textContent = 'MATEMÁTICA';
});

const botao2 = document.getElementById('lp');

botao2.addEventListener('mouseover', () => {
  botao2.textContent = 'LITERATURA E PRODUÇÃO TEXTUAL';
});

botao2.addEventListener('mouseout', () => {
  botao2.textContent = 'LINGUAGENS';
});

const botao3 = document.getElementById('ch');

botao3.addEventListener('mouseover', () => {
  botao3.textContent = 'GEOPOLÍTICA';
});

botao3.addEventListener('mouseout', () => {
  botao3.textContent = 'CIÊNCIAS HUMANAS';
});

const botao4 = document.getElementById('cn');

botao4.addEventListener('mouseover', () => {
  botao4.textContent = ' CITOLOGIA, E EFEITO ESTUFA';
});

botao4.addEventListener('mouseout', () => {
  botao4.textContent = 'CIÊNCIAS DA NATUREZA';
});