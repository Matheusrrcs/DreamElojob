$("#ligaAtual").change(() => {

     $("#imgAtual").attr('src', `img/elos/${ligaAtual.value}.webp`)


     // se for mestre, desafiante ou grão mestre ele tira o select de divisão
     if (ligaAtual.value == "mestre" || ligaAtual.value == "graomestre" || ligaAtual.value == "desafiante" || ligaAtual.value == "radiante") {
          $("#boxDivisaoAtual").addClass('d-none')
     }
     else {
          $("#boxDivisaoAtual ").removeClass('d-none')
     }

     AddLoad()
})

$("#ligaDesejada").change(() => {

     $("#imgDesejada").attr('src', `img/elos/${ligaDesejada.value}.webp`)


     // se for mestre, desafiante ou grão mestre ele tira o select de divisão
     if (ligaDesejada.value == "mestre" || ligaDesejada.value == "graomestre" || ligaDesejada.value == "desafiante" || ligaDesejada.value == "radiante") {
          $("#boxDivisaoDesejada").addClass('d-none')
     }
     else {
          $("#boxDivisaoDesejada ").removeClass('d-none')
     }

     AddLoad()
})




// quando mudar a divisão atual
$("#divisaoAtual").change(() => {
     AddLoad()
})

//quando mudar a divisão desejada
$("#divisaoDesejada").change(() => {
     AddLoad()
})


// liga e desliga a animação de load
function AddLoad() {

     var load = document.getElementById("load")

     load.classList.remove("d-none")

     document.getElementById("contentEloFinal").classList.add("d-none")
     document.getElementById("alert").classList.add("d-none")

     function Load() {
          load.classList.add("d-none")

          mudaPreçoLOL()


          Aviso()
     }

     setTimeout(Load, 200);


}



// verifica se os elos estão certos se não manda o aviso
function Aviso() {

     var elos = {
          ferro: 1,
          bronze: 2,
          prata: 3,
          ouro: 4,
          platina: 5,
          esmeralda: 6,
          diamante: 7,
          mestre: 8,
          graomestre: 9,
          desafiante: 10
     }



     let ligaAtual = document.getElementById('ligaAtual').value
     let ligaDesejada = document.getElementById('ligaDesejada').value
     let divisaoAtual = document.getElementById('divisaoAtual').value
     let divisaoDesejada = document.getElementById('divisaoDesejada').value

     // coloca o d-none
     function esconde() {
          document.getElementById("contentEloFinal").classList.add("d-none")
          document.getElementById("alert").classList.remove("d-none")

     }
     // tira o d-none 
     function mostra() {
          document.getElementById("alert").classList.add("d-none")
          document.getElementById("contentEloFinal").classList.remove("d-none")
     }


     if (elos[`${ligaAtual}`] > elos[`${ligaDesejada}`]) {
          esconde()
     }
     else if (elos[`${ligaAtual}`] == elos[`${ligaDesejada}`] && divisaoAtual <= divisaoDesejada) {
          esconde()
     }
     else if (ligaAtual == "mestre" && ligaDesejada == "mestre" || ligaAtual == "graomestre" && ligaDesejada == "graomestre" || ligaAtual == "desafiante" && ligaDesejada == "desafiante") {
          esconde()
     }
     else {
          mostra()
     }


}



// manda os preços do league of legends
function mudaPreçoLOL() {

     const eloboost = {
          ferro4: 0,
          ferro3: 8,
          ferro2: 16,
          ferro1: 24,
          bronze4: 32,
          bronze3: 42,
          bronze2: 52,
          bronze1: 62,
          prata4: 72,
          prata3: 85,
          prata2: 98,
          prata1: 111,
          ouro4: 124,
          ouro3: 141,
          ouro2: 158,
          ouro1: 175,
          platina4: 192,
          platina3: 216,
          platina2: 240,
          platina1: 264,
          diamante4: 288,
          diamante3: 353,
          diamante2: 428,
          diamante1: 508,
          mestre4: 598,
          mestre3: 598,
          mestre2: 598,
          mestre1: 598,
          graomestre4: 1098,
          graomestre3: 1098,
          graomestre2: 1098,
          graomestre1: 1098,
          desafiante4: 1998,
          desafiante3: 1998,
          desafiante2: 1998,
          desafiante1: 1998
     }

     const duoboost = {
          ferro4: 0,
          ferro3: 15,
          ferro2: 30,
          ferro1: 45,
          bronze4: 60,
          bronze3: 77,
          bronze2: 94,
          bronze1: 111,
          prata4: 128,
          prata3: 148,
          prata2: 168,
          prata1: 188,
          ouro4: 208,
          ouro3: 233,
          ouro2: 258,
          ouro1: 283,
          platina4: 308,
          platina3: 343,
          platina2: 378,
          platina1: 413,
          diamante4: 448,
          diamante3: 538,
          diamante2: 648,
          diamante1: 788,
          mestre4: 968,
          mestre3: 968,
          mestre2: 968,
          mestre1: 968
     }

     if (trataNome("title") == "eloboost") {
          calculaPreco(eloboost)

     }
     if (trataNome("title") == "duoboost") {
          calculaPreco(duoboost)

     }




}



// trata o title da pagina capturado
function trataNome(id) {
     return document.getElementById(id).textContent.toLocaleLowerCase().replaceAll(" ", "").trim()
}

//faz o calculo do preço
function calculaPreco(tipoJogo) {


     let atual = document.getElementById("ligaAtual").value + document.getElementById("divisaoAtual").value
     let desejada = document.getElementById("ligaDesejada").value + document.getElementById("divisaoDesejada").value

     let resultado
     let resultadoFinal

     resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`]

     resultadoFinal = resultado / 0.8

     resultado = resultadoFinal * 0.8

     document.getElementById("valor").innerHTML = `<small>POR:</small> ${moedaBrasil(resultado)}`
}

// faz o desconto 
function desconto(tipoJogo) {
 

     let atual = document.getElementById("ligaAtual").value + document.getElementById("divisaoAtual").value
     let desejada = document.getElementById("ligaDesejada").value + document.getElementById("divisaoDesejada").value

     let resultado

     resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`]

     descontoFinal = resultado / 0.8


     document.getElementById("desconto").innerHTML = `<small>DE:</small> ${moedaBrasil(descontoFinal)}`
}



// formata o numero para moeda brasileira
function moedaBrasil(valor) {

     var valor
     var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

     return valorFormatado
} 