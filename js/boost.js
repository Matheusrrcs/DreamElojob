//muda a imagem quando seleciona outra nome e coloca a animação de load
//quando mudar a liga atual
$("#ligaAtual").change(() => {
  if (trataNome("choice") == "valorant") {
    document.getElementById(
      "imgAtual"
    ).src = `img/elos/valorant/${ligaAtual.value}.webp`;
  } else {
    document.getElementById(
      "imgAtual"
    ).src = `img/elos/${ligaAtual.value}.webp`;
  }

  if (
    ligaAtual.value == "mestre" ||
    ligaAtual.value == "graomestre" ||
    ligaAtual.value == "desafiante" ||
    ligaAtual.value == "radiante"
  ) {
    $(".form-group#boxDivisaoAtual").addClass("d-none");
  } else {
    $(".form-group#boxDivisaoAtual").removeClass("d-none");
  }

  AddLoad();
});

//muda a imagem quando seleciona outra nome e coloca a animação de load
// quando mudar a liga desejada
$("#ligaDesejada").change(() => {
  if (trataNome("choice") == "valorant") {
    document.getElementById(
      "imgDesejada"
    ).src = `img/elos/valorant/${ligaDesejada.value}.webp`;
  } else {
    document.getElementById(
      "imgDesejada"
    ).src = `img/elos/${ligaDesejada.value}.webp`;
  }

  // se for mestre, desafiante ou grão mestre ele tira o select de divisão
  if (
    ligaDesejada.value == "mestre" ||
    ligaDesejada.value == "graomestre" ||
    ligaDesejada.value == "desafiante" ||
    ligaDesejada.value == "radiante"
  ) {
    $(".form-group#boxDivisaoDesejada").addClass("d-none");
  } else {
    $(".form-group#boxDivisaoDesejada").removeClass("d-none");
  }

  AddLoad();
});

// quando mudar a divisão atual
$("#divisaoAtual").change(() => {
  AddLoad();
});

//quando mudar a divisão desejada
$("#divisaoDesejada").change(() => {
  AddLoad();
});

// liga e desliga a animação de load
function AddLoad() {
  var load = document.getElementById("load");

  load.classList.remove("d-none");

  document.getElementById("contentEloFinal").classList.add("d-none");
  document.getElementById("alert").classList.add("d-none");

  function Load() {
    load.classList.add("d-none");

    if (trataNome("choice") == "leagueoflegends") {
      mudaPreçoLOL();
    } else if (trataNome("choice") == "wildrift") {
      mudaPreçoWild();
    } else {
      mudaPreçoValorant();
    }

    Aviso();
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
    desafiante: 10,
  };

  var elosValorant = {
    ferro: 1,
    bronze: 2,
    prata: 3,
    ouro: 4,
    platina: 5,
    diamante: 6,
    ascendente: 7,
    imortal: 8,
    radiante: 9,
  };

  let ligaAtual = document.getElementById("ligaAtual").value;
  let ligaDesejada = document.getElementById("ligaDesejada").value;
  let divisaoAtual = document.getElementById("divisaoAtual").value;
  let divisaoDesejada = document.getElementById("divisaoDesejada").value;

  // coloca o d-none
  function esconde() {
    document.getElementById("contentEloFinal").classList.add("d-none");
    document.getElementById("alert").classList.remove("d-none");
  }
  // tira o d-none
  function mostra() {
    document.getElementById("alert").classList.add("d-none");
    document.getElementById("contentEloFinal").classList.remove("d-none");
  }

  // se o jogo for valorant
  if (trataNome("choice") == "valorant") {
    if (elosValorant[`${ligaAtual}`] > elosValorant[`${ligaDesejada}`]) {
      esconde();
    } else if (
      elosValorant[`${ligaAtual}`] == elosValorant[`${ligaDesejada}`] &&
      divisaoAtual >= divisaoDesejada
    ) {
      esconde();
    } else {
      mostra();
    }
  }
  // se não é lol ou wild
  else {
    if (elos[`${ligaAtual}`] > elos[`${ligaDesejada}`]) {
      esconde();
    } else if (
      elos[`${ligaAtual}`] == elos[`${ligaDesejada}`] &&
      divisaoAtual <= divisaoDesejada
    ) {
      esconde();
    } else if (ligaAtual == "mestre" && ligaDesejada == "mestre") {
      esconde();
    } else {
      mostra();
    }
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
    esmeralda4: 306,
    esmeralda3: 348,
    esmeralda2: 390,
    esmeralda1: 432,
    diamante4: 497,
    diamante3: 562,
    diamante2: 627,
    diamante1: 692,
    mestre4: 782,
    mestre3: 782,
    mestre2: 782,
    mestre1: 782,
    graoMestre4: 1098,
    graoMestre3: 1098,
    graoMestre2: 1098,
    graoMestre1: 1098,
    desafiante4: 1998,
    desafiante3: 1998,
    desafiante2: 1998,
    desafiante1: 1998,
  };

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
    esmeralda4: 473,
    esmeralda3: 533,
    esmeralda2: 593,
    esmeralda1: 653,
    diamante4: 743,
    diamante3: 833,
    diamante2: 923,
    diamante1: 1013,
    mestre4: 1193,
    mestre3: 1193,
    mestre2: 1193,
    mestre1: 1193,
  };
  if (trataNome("title") == "eloboost") {
    calculaPreco(eloboost);
    desconto(eloboost);
  }
  if (trataNome("title") == "duoboost") {
    calculaPreco(duoboost);
    desconto(duoboost);
  }
}

// manda os preços do wild rift
function mudaPreçoWild() {
  const eloboost = {
    ferro4: 0,
    ferro3: 10,
    ferro2: 20,
    ferro1: 30,
    bronze4: 40,
    bronze3: 52,
    bronze2: 64,
    bronze1: 76,
    prata4: 91,
    prata3: 105,
    prata2: 121,
    prata1: 136,
    ouro4: 156,
    ouro3: 176,
    ouro2: 196,
    ouro1: 216,
    platina4: 241,
    platina3: 266,
    platina2: 291,
    platina1: 316,
    esmeralda4: 361,
    esmeralda3: 406,
    esmeralda2: 451,
    esmeralda1: 496,
    diamante4: 576,
    diamante3: 656,
    diamante2: 751,
    diamante1: 871,
    mestre4: 1011,
    mestre3: 1011,
    mestre2: 1011,
    mestre1: 1011,
    graomestre4: 1461,
    graomestre3: 1461,
    graomestre2: 1461,
    graomestre1: 1461,
    desafiante4: 2361,
    desafiante3: 2361,
    desafiante2: 2361,
    desafiante1: 2361,
  };
  const duoboost = {
    ferro4: 0,
    ferro3: 15,
    ferro2: 30,
    ferro1: 45,
    bronze4: 63,
    bronze3: 81,
    bronze2: 99,
    bronze1: 117,
    prata4: 137,
    prata3: 157,
    prata2: 177,
    prata1: 197,
    ouro4: 222,
    ouro3: 247,
    ouro2: 272,
    ouro1: 297,
    platina4: 332,
    platina3: 367,
    platina2: 402,
    platina1: 437,
    esmeralda4: 472,
    esmeralda3: 562,
    esmeralda2: 652,
    esmeralda1: 742,
    diamante4: 882,
    diamante3: 1022,
    diamante2: 1182,
    diamante1: 1372,
    mestre4: 1622,
    mestre3: 1622,
    mestre2: 1622,
    mestre1: 1622,
  };

  if (trataNome("title") == "eloboost") {
    calculaPreco(eloboost);
    desconto(eloboost);
  }
  if (trataNome("title") == "duoboost") {
    calculaPreco(duoboost);
    desconto(duoboost);
  }
}

// manda os preços do valorant
function mudaPreçoValorant() {
  const eloboost = {
    ferro1: 0,
    ferro2: 6,
    ferro3: 12,

    bronze1: 18,
    bronze2: 24,
    bronze3: 30,

    prata1: 40,
    prata2: 50,
    prata3: 60,

    ouro1: 76,
    ouro2: 92,
    ouro3: 108,

    platina1: 129,
    platina2: 150,
    platina3: 171,

    diamante1: 210,
    diamante2: 249,
    diamante3: 288,

    ascendente1: 338,
    ascendente2: 388,
    ascendente3: 438,

    imortal1: 528,
    imortal2: 618,
    imortal3: 718,

    radiante1: 968,
    radiante2: 968,
    radiante3: 968,
  };

  const duoboost = {
    ferro1: 0,
    ferro2: 12,
    ferro3: 24,

    bronze1: 44,
    bronze2: 64,
    bronze3: 84,

    prata1: 109,
    prata2: 134,
    prata3: 159,

    ouro1: 194,
    ouro2: 229,
    ouro3: 264,

    platina1: 314,
    platina2: 364,
    platina3: 414,

    diamante1: 504,
    diamante2: 594,
    diamante3: 684,

    ascendente1: 804,
    ascendente2: 924,
    ascendente3: 1064,

    imortal1: 1314,
    imortal2: 1564,
    imortal3: 1864,

    radiante1: 2614,
    radiante2: 2614,
    radiante3: 2614,
  };

  if (trataNome("title") == "eloboost") {
    calculaPreco(eloboost);
    desconto(eloboost);
  }
  if (trataNome("title") == "duoboost") {
    calculaPreco(duoboost);
    desconto(duoboost);
  }
}

// trata o title da pagina capturado
function trataNome(id) {
  return document
    .getElementById(id)
    .textContent.toLocaleLowerCase()
    .replaceAll(" ", "")
    .trim();
}

//faz o calculo do preço
function calculaPreco(tipoJogo) {
  let atual =
    document.getElementById("ligaAtual").value +
    document.getElementById("divisaoAtual").value;
  let desejada =
    document.getElementById("ligaDesejada").value +
    document.getElementById("divisaoDesejada").value;

  let resultado;
  let resultadoFinal;

  resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`];

  resultadoFinal = resultado / 0.8;

  resultado = resultadoFinal * 0.8;

  document.getElementById(
    "valor"
  ).innerHTML = `<small>POR:</small> ${moedaBrasil(resultado)}`;
}

// faz o desconto
function desconto(tipoJogo) {
  let desconto = 20;

  let atual =
    document.getElementById("ligaAtual").value +
    document.getElementById("divisaoAtual").value;
  let desejada =
    document.getElementById("ligaDesejada").value +
    document.getElementById("divisaoDesejada").value;

  let resultado;

  resultado = tipoJogo[`${desejada}`] - tipoJogo[`${atual}`];

  descontoFinal = resultado / 0.8;

  console.log(tipoJogo.ferro1);

  document.getElementById("desconto").innerHTML = `<small>DE: ${moedaBrasil(
    descontoFinal
  )}</small> `;
}
// formata o numero para moeda brasileira
function moedaBrasil(valor) {
  var valor;
  var valorFormatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valorFormatado;
}
