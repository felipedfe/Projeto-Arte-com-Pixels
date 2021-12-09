window.onload = function () {

  //Adicionando o quadro de pixels
  let linhas = document.getElementsByClassName("linhas");
  
  for (let c = 0; c < linhas.length; c += 1) {
    for (let i = 0; i < linhas.length; i += 1) {
      let bloquinho = document.createElement("div");
      linhas[c].appendChild(bloquinho).className = "pixel";
    }
  }

  //Selecionando as cores da paleta
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

  //





}