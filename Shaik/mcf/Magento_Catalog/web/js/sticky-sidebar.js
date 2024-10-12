require(['jquery', 'domReady!'], function($){
   "use strict";

    $(window).on('scroll', function () {
        let bottomPos = $('.product-images');
        if($(window).scrollTop() >= 100) {
            $('.product.info.detailed').addClass('fixed');
            $('.product-info-main').addClass('fixed');
        }
        if ($(window).scrollTop() >= $(
            '.product-images').offset().top + $('.product-images').
                outerHeight() - window.innerHeight) {
            $('.product.info.detailed').removeClass('fixed');
            $('.product-info-main').removeClass('fixed');
        }
    });
});