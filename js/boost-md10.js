//muda a imagem quando seleciona outra nome e coloca a animação de load
//quando mudar a liga atual
$("#ligaAtual").change(() => {




  document.querySelectorAll('#imgAtual').forEach(function (item) {
    item.src = `../imagens/elos/${ligaAtual.value}.png`;
  })


  AddLoad()


})

// liga e desliga a animação de load
function AddLoad() {
  var load = document.getElementById("load")

  load.classList.remove("d-none")

  document.getElementById("contentEloFinal").classList.add("d-none")


  function Load() {
    load.classList.add("d-none")
    document.getElementById("contentEloFinal").classList.remove("d-none")


  }

  setTimeout(Load, 200);
}



// trata o title da pagina capturado
function trataNome(id) {
  return document.getElementById(id).textContent.toLocaleLowerCase().replaceAll(" ", "").trim()
}