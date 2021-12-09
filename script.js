window.onload = function () {

  let linhas = document.getElementsByClassName("linhas");
  
  for (let c = 0; c < linhas.length; c += 1) {
    for (let i = 0; i < linhas.length; i += 1) {
      let bloquinho = document.createElement("div");
      linhas[c].appendChild(bloquinho).className = "pixel";
    }
  }









}