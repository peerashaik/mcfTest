require(['jquery', 'domReady!'], function($){
   "use strict";

    $(window).on('scroll', function () {
        if($(window).scrollTop() >= 100) {
            $('.product.info.detailed').addClass('fixed');
            $('.product-info-main').addClass('fixed');
        }
        if ($(window).scrollTop() >= $(
            '.product.media').offset().top + $('.product.media').
                outerHeight() - window.innerHeight) {
            $('.product.info.detailed').removeClass('fixed');
            $('.product-info-main').removeClass('fixed');
        }
    });
});