$(document).ready(function () {

    var topSlider = $(".top-slider");

    topSlider.slick({
        speed: 1000,
        autoplay: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        draggable: true
    });

    // make mouse scroll work
    topSlider.on('wheel', (function (e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

    // make keyboard arrows work
    $(document).on('keydown', function (e) {
        if (e.keyCode == 37) {
            topSlider.slick('slickPrev');
        }
        if (e.keyCode == 39) {
            topSlider.slick('slickNext');
        }
    });

    // toggle header menu on mob screen
    var hamburger = $(".header__hamburger");
    var close = $(".header__mob-close");

    hamburger.click(function () {
        var menu = $('.header__mob-menu');
        menu.toggleClass('header__mob-menu--show');
    });

    close.click(function () {
        var menu = $('.header__mob-menu');
        menu.toggleClass('header__mob-menu--show');
    });

    // highlight active menu item
    var menu = document.querySelectorAll(".header__menu li");
    menu.forEach(function (elem) {
        elem.addEventListener("click", function () {
            if ($(elem).hasClass('header__active-link')) {

            } else {
                menu.forEach(function (e) { 
                    $(e).removeClass('header__active-link');
                })
                $(elem).addClass('header__active-link');
            }
        });
    });

});


