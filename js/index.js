$(document).ready(function () {
  const request = new XMLHttpRequest();
  request.open("GET", "navbar.html");
  request.onload = function () {
    if (request.status === 200) {
      document.querySelector("#nav").innerHTML = request.responseText;
    } else {
      console.error("Erro ao carregar o arquivo navbar.html");
    }
  };
  request.send();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// função do dropdown menu
$(function () {
  $("#navbar").bootnavbar();
});

(function ($) {
  var defaults = {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    navbar_expand: "lg",
  };
  $.fn.bootnavbar = function () {
    var screen_width = $(document).width();

    if (screen_width >= defaults.lg) {
      $(this)
        .find(".dropright,.dropdown")
        .hover(
          function () {
            $(this).addClass("show");
            $(this)
              .find(".dropdown-menu")
              .first()
              .addClass("show")
              .addClass("animated fadeIn")
              .one(
                "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd",
                function () {
                  $(this).removeClass("animated fadeIn");
                }
              );
          },
          function () {
            $(this).removeClass("show");
            $(this).find(".dropdown-menu").first().removeClass("show");
          }
        );
    }

    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this).next().hasClass("show")) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  };
})(jQuery);

// função que muda a cor do navbar quando clica no icone responsivo
$(function () {
  $("#navbar-toggler").click(function (e) {
    var menuItem = $(this);

    if (menuItem.attr("aria-expanded") === "true") {
      $(".navbar ").removeClass("scrolled");
    } else if (menuItem.attr("aria-expanded") === "false") {
      $(".navbar").addClass("scrolled");
    }
  });
});

$(".whats").click((e) => {
  e.preventDefault();

  text = "Olá,%20estou%20no%20site%20e%20gostaria%20de%20tirar%20uma%20duvida.";

  var url =
    `https://${detecMoblie()}.whatsapp.com/send?1=pt_BR&phone=557199545176&text=`.concat(
      text
    );

  window.open(url);
});

// função que muda a cor do navbar quando rola a pagina
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    var $corpo = $(".corpo");
    var $sect = $(".sect");
    var $navT = $(".navbar-toggler");

    if ($navT.attr("aria-expanded") === "false") {
      $nav.toggleClass("scrolled", $(this).scrollTop() > 5);
    }

    if (window.screen.availWidth < 700) {
      $corpo.toggleClass("scrolled", $(this).scrollTop() > $corpo.height());
    } else {
      $corpo.toggleClass("scrolled", $(this).scrollTop() > 600);
    }
  });
});

function detecMoblie() {
  window.mobileCheck = function mobileCheck() {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  if (mobileCheck() == false) {
    return (type = "web");
  } else {
    return (type = "api");
  }
}

$(function () {
  var anim = anime({
    targets: ".card-game",

    duration: 2400,
    opacity: [0, 1],

    delay: (el, i) => {
      return 100 + 50 * i;
    },
  });

  let gameslol = document.getElementsByClassName("Lgamelol")[0];
  let gameswd = document.getElementsByClassName("Lgamewd")[0];
  let gamesvava = document.getElementsByClassName("Lgamevava")[0];

  let contentlol = document.getElementsByClassName("content-lol")[0];
  let contentwd = document.getElementsByClassName("content-wd")[0];
  let contentvava = document.getElementsByClassName("content-vava")[0];

  let lol = document.getElementsByClassName("gamelol")[0];
  let wd = document.getElementsByClassName("gamewd")[0];
  let vava = document.getElementsByClassName("gamevava")[0];

  function toggle() {
    if (anim.began) {
      anim.restart();
    }
  }

  gameslol.addEventListener("click", () => {
    toggle();

    lol.classList.add("active");
    wd.classList.remove("active");
    vava.classList.remove("active");

    gameslol.classList.add("active");
    gameswd.classList.remove("active");
    gamesvava.classList.remove("active");

    contentlol.classList.add("active");
    contentwd.classList.remove("active");
    contentvava.classList.remove("active");
  });

  gameswd.addEventListener("click", () => {
    toggle();
    lol.classList.remove("active");
    wd.classList.add("active");
    vava.classList.remove("active");

    gameslol.classList.remove("active");
    gameswd.classList.add("active");
    gamesvava.classList.remove("active");

    contentlol.classList.remove("active");
    contentwd.classList.add("active");
    contentvava.classList.remove("active");
  });

  gamesvava.addEventListener("click", () => {
    toggle();
    lol.classList.remove("active");
    wd.classList.remove("active");
    vava.classList.add("active");

    gameslol.classList.remove("active");
    gameswd.classList.remove("active");
    gamesvava.classList.add("active");

    contentlol.classList.remove("active");
    contentwd.classList.remove("active");
    contentvava.classList.add("active");
  });
});

var pessoas = document.getElementById("visits");
var numero;

if (localStorage.getItem("pessoas") == null) {
  numero = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

  localStorage.setItem("pessoas", numero);

  pessoas.innerText = localStorage.getItem("pessoas");
} else {
  pessoas.innerText = localStorage.getItem("pessoas");
}

function Temporizador(initiate) {
  if (initiate !== true) {
    numero = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    localStorage.setItem("pessoas", numero);
    pessoas.innerText = localStorage.getItem("pessoas");
  }

  setTimeout(Temporizador, 15000);
}

$(function () {
  Temporizador(true);
});
