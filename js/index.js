
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
        navbar_expand: 'lg'
    };
    $.fn.bootnavbar = function () {

        var screen_width = $(document).width();

        if (screen_width >= defaults.lg) {
            $(this).find('.dropright,.dropdown').hover(function () {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').first().addClass('show').addClass('animated fadeIn').one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
                    $(this).removeClass('animated fadeIn');
                });
            }, function () {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').first().removeClass('show');
            })
        }


        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
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
            $(".navbar ").removeClass('scrolled');
        }
        else if (menuItem.attr("aria-expanded") === "false") {
            $(".navbar").addClass('scrolled');
        }

    });

});



// função que muda a cor do navbar quando rola a pagina
$(function () {

    $(document).scroll(function () {
       
        var $nav = $(".navbar");
        var $corpo = $(".corpo");
        var $sect = $(".sect")
        var $navT = $(".navbar-toggler")
       
       
        if ($navT.attr("aria-expanded") === "false") {
            $nav.toggleClass('scrolled', $(this).scrollTop() > 5);
        }

        if (window.screen.availWidth < 700) {

            $corpo.toggleClass('scrolled', $(this).scrollTop() > $corpo.height())
        }
        else {

            $corpo.toggleClass('scrolled', $(this).scrollTop() > 600)
        }

    });


});
 