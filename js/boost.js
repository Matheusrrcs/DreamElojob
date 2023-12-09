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
    ligaAtual.value == "graoMestre" ||
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
    ligaDesejada.value == "graoMestre" ||
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
    graoMestre: 9,
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
    ferro3: 7,
    ferro2: 14,
    ferro1: 21,
    bronze4: 28,
    bronze3: 35,
    bronze2: 42,
    bronze1: 49,
    prata4: 56,
    prata3: 66,
    prata2: 76,
    prata1: 86,
    ouro4: 96,
    ouro3: 110,
    ouro2: 124,
    ouro1: 138,
    platina4: 152,
    platina3: 172,
    platina2: 192,
    platina1: 212,
    esmeralda4: 232,
    esmeralda3: 267,
    esmeralda2: 302,
    esmeralda1: 337,
    diamante4: 372,
    diamante3: 427,
    diamante2: 482,
    diamante1: 537,
    mestre4: 607,
    mestre3: 607,
    mestre2: 607,
    mestre1: 607,
    graoMestre4: 957,
    graoMestre3: 957,
    graoMestre2: 957,
    graoMestre1: 957,
    desafiante4: 1657,
    desafiante3: 1657,
    desafiante2: 1657,
    desafiante1: 1657,
  };

  const duoboost = {
    ferro4: 0,
    ferro3: 12,
    ferro2: 24,
    ferro1: 36,
    bronze4: 48,
    bronze3: 62,
    bronze2: 76,
    bronze1: 90,
    prata4: 104,
    prata3: 121,
    prata2: 138,
    prata1: 155,
    ouro4: 172,
    ouro3: 193,
    ouro2: 214,
    ouro1: 235,
    platina4: 256,
    platina3: 285,
    platina2: 314,
    platina1: 343,
    esmeralda4: 372,
    esmeralda3: 422,
    esmeralda2: 472,
    esmeralda1: 522,
    diamante4: 572,
    diamante3: 652,
    diamante2: 732,
    diamante1: 812,
    mestre4: 922,
    mestre3: 922,
    mestre2: 922,
    mestre1: 922,
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
    graoMestre4: 1461,
    graoMestre3: 1461,
    graoMestre2: 1461,
    graoMestre1: 1461,
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
    platina2: 149,
    platina3: 169,

    diamante1: 189,
    diamante2: 224,
    diamante3: 259,

    ascendente1: 294,
    ascendente2: 344,
    ascendente3: 394,

    imortal1: 444,
    imortal2: 519,
    imortal3: 594,

    radiante1: 814,
    radiante2: 814,
    radiante3: 814,
  };

  const duoboost = {
    ferro1: 0,
    ferro2: 12,
    ferro3: 24,

    bronze1: 36,
    bronze2: 54,
    bronze3: 72,

    prata1: 90,
    prata2: 115,
    prata3: 140,

    ouro1: 165,
    ouro2: 200,
    ouro3: 235,

    platina1: 270,
    platina2: 325,
    platina3: 380,

    diamante1: 435,
    diamante2: 525,
    diamante3: 615,

    ascendente1: 705,
    ascendente2: 795,
    ascendente3: 885,

    imortal1: 975,
    imortal2: 1135,
    imortal3: 1295,

    radiante1: 1745,
    radiante2: 1745,
    radiante3: 1745,
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
