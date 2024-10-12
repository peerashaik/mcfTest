define(['jquery'], function($){
   "use strict";

    $(window).scroll(function () {
        if($(window).scrollTop() >= 90) {
            $('.page-header').addClass('sticky');
        } else if ($(window).scrollTop() <= 90){
            $('.page-header').removeClass('sticky');
        }  
    });
});