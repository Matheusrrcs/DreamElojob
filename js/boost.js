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
     else if (ligaAtual == "mestre" && ligaDesejada == "mestre" ||  ligaAtual == "graomestre" && ligaDesejada == "graomestre" || ligaAtual == "desafiante" && ligaDesejada == "desafiante") {
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
          ferro3: 10,
          ferro2: 20,
          ferro1: 30,
          bronze4: 40,
          bronze3: 55,
          bronze2: 70,
          bronze1: 85,
          prata4: 100,
          prata3: 115,
          prata2: 130,
          prata1: 145,
          ouro4: 160,
          ouro3: 180,
          ouro2: 200,
          ouro1: 220,
          platina4: 250,
          platina3: 280,
          platina2: 310,
          platina1: 340,
          diamante4: 390,
          diamante3: 460,
          diamante2: 540,
          diamante1: 630,
          mestre4: 730,
          mestre3: 730,
          mestre2: 730,
          mestre1: 730,
          graomestre4: 1330 ,
          graomestre3: 1330,
          graomestre2: 1330,
          graomestre1: 1330,
          desafiante4: 2330,
          desafiante3: 2330,
          desafiante2: 2330,
          desafiante1: 2330
     }

     const duoboost = {
          ferro4: 0,
    ferro3: 15,
    ferro2: 30,
    ferro1: 45,
    bronze4: 60,
    bronze3: 80,
    bronze2: 100,
    bronze1: 120,
    prata4: 143,
    prata3: 166,
    prata2: 189,
    prata1: 212,
    ouro4: 235,
    ouro3: 262,
    ouro2: 289,
    ouro1: 316,
    platina4: 343,
    platina3: 383,
    platina2: 423,
    platina1: 463,
    diamante4: 503,
    diamante3: 603,
    diamante2: 723,
    diamante1: 903,
    mestre4: 1153,
    mestre3: 1153,
    mestre2: 1153,
    mestre1: 1153
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
   

     resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`]
 

     document.getElementById("valor").innerHTML = `<small>POR:</small> ${moedaBrasil(resultado)}`
}


// formata o numero para moeda brasileira
function moedaBrasil(valor) {

     var valor
     var valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

     return valorFormatado
} 