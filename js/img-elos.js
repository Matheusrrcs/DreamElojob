$("#ligaAtual").change(()=>{
 
       $("#imgAtual").attr('src', `img/elos/${ligaAtual.value}.webp`)

})

$("#ligaDesejada").change(() =>{

     $("#imgDesejada").attr('src', `img/elos/${ligaDesejada.value}.webp`)

})


