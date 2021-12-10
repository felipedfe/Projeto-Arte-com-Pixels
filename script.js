window.onload = function () {

  let tamanhoInicialDoQuadro = 5;

  // Adiciona o quadro de pixels
  function imprimeQuadroPixels (tamanho) {
    let linhasEColunas = tamanho;
    
    for (let c = 0; c < linhasEColunas; c += 1) {                 // 1o FOR cria as linhas
      let divLinhas = document.createElement("div")
      divLinhas.className = "linhas";
      let pixelBoard = document.getElementById("pixel-board");
      pixelBoard.appendChild(divLinhas);
    }
    for (let i = 0; i < linhasEColunas; i += 1) {                     // 2o/3o FOR preenche as linhas com os pixels
      divLinhas = document.getElementsByClassName("linhas");
      for (let c = 0; c < linhasEColunas; c += 1) {
        let pixel = document.createElement("div");
        divLinhas[i].appendChild(pixel).className = "pixel";
      }
    }
  }

  // para remover as linhas/colunas
  function apagaQuadroPixels (tamanho) {
    linhasEColunas = tamanho;
    let pixelBoard = document.getElementById("pixel-board");     
    for (let c = 0; c < linhasEColunas; c += 1){
      pixelBoard.firstChild.remove();
    }
  }

  imprimeQuadroPixels(tamanhoInicialDoQuadro);
  preencheCor();
  

  // Selecionando as cores da paleta
  function selecao (evento) {
    let elementoClicado = evento.target;
    for (let i = 0; i < cores.length; i += 1) {
      cores[i].className = "color"
    }
    if (elementoClicado.classList[1] !== "selected") {
      elementoClicado.classList.add("selected");
    }
  }

  let cores = document.getElementsByClassName("color");
  
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener("click", selecao);
  }

  // Para preencher de cor os pixels do quadro
  function preencheCor () {
  let pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i += 1){
      pixels[i].addEventListener("click", mudaCorPixel);
    }
  }

  function mudaCorPixel (evento) {
    let pixelClicado = evento.target;
    let corDaPaleta = document.querySelector(".selected");    // pega o elemento
    corDaPaleta = getComputedStyle(corDaPaleta).backgroundColor;      //  pega a cor do elemento no CSS
    console.log(corDaPaleta);
    pixelClicado.style.backgroundColor = corDaPaleta;
  }

  // Botão pra pintar o quadro de branco
  let botao = document.getElementById("clear-board");
  botao.addEventListener("click", limpaQuadro);

  function limpaQuadro () {
    let pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = "white";
    }
  }

  // Input e botão gerador de tamanho
  let botaoGenerateBoard = document.getElementById("generate-board");
  botaoGenerateBoard.addEventListener("click", novoTamanho);

  function novoTamanho () {
    let input = document.getElementById("board-size").value;
    if (input === "") {
      alert("Board inválido!");
    } else{
      let linhasEColunas = document.getElementsByClassName("linhas");
      apagaQuadroPixels(linhasEColunas.length);   // para saber o número de linhas/colunas para apagar
      imprimeQuadroPixels(input);
      preencheCor();     // essa função é pra adcionar o listener nos novos pixels
    }
  }



}