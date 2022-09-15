const tamanhoInicialDoQuadro = 8;
const cores = document.getElementsByClassName('color');
const botaoClear = document.getElementById('clear-board');
const botaoGenerateBoard = document.getElementById('generate-board');

function imprimeQuadroPixels(tamanho) {
  const linhasEColunas = tamanho;

  for (let c = 0; c < linhasEColunas; c += 1) { // 1o FOR cria as linhas
    const divLinhas = document.createElement('div');
    divLinhas.className = 'linhas';
    const pixelBoard = document.getElementById('pixel-board');
    pixelBoard.appendChild(divLinhas);
  }
  for (let i = 0; i < linhasEColunas; i += 1) { // 2o/3o FOR preenche as linhas com os pixels
    const divLinhas = document.getElementsByClassName('linhas');
    for (let c = 0; c < linhasEColunas; c += 1) {
      const pixel = document.createElement('div');
      divLinhas[i].appendChild(pixel).className = 'pixel';
    }
  }
}

function apagaQuadroPixels(tamanho) {
  const linhasEColunas = tamanho;
  const pixelBoard = document.getElementById('pixel-board');
  for (let c = 0; c < linhasEColunas; c += 1) {
    pixelBoard.firstChild.remove();
  }
}

// Selecionando as cores da paleta
function selecao(evento) {
  const elementoClicado = evento.target;
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].className = 'color';
  }
  if (elementoClicado.classList[1] !== 'selected') {
    elementoClicado.classList.add('selected');
  }
}
function mudaCorPixel(evento) {
  const pixelClicado = evento.target;
  let corDaPaleta = document.querySelector('.selected'); // pega o elemento
  corDaPaleta = getComputedStyle(corDaPaleta).backgroundColor; //  pega a cor do elemento no CSS
  pixelClicado.style.backgroundColor = corDaPaleta;
}

// Para preencher de cor os pixels do quadro
function preencheCor() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', mudaCorPixel);
  }
}

function limpaQuadro() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function novoTamanho() {
  const input = document.getElementById('board-size').value;
  if (!input) {
    alert('Board inválido!');
  } else {
    const linhasEColunas = document.getElementsByClassName('linhas');
    apagaQuadroPixels(linhasEColunas.length); // para saber o número de linhas/colunas para apagar
    imprimeQuadroPixels(input);
    preencheCor(); // essa função é pra adicionar o listener nos novos pixels
  }
}

window.onload = function start() {
  imprimeQuadroPixels(tamanhoInicialDoQuadro);
  preencheCor();

  botaoGenerateBoard.addEventListener('click', novoTamanho);

  botaoClear.addEventListener('click', limpaQuadro);

  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', selecao);
    console.log(cores[i]);
  }
};
