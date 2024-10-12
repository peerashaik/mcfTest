require(['jquery', 'domReady!'], function($){

    $('.search-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-open');
        $('.block-search').slideToggle(1000, function() {
            $(this).toggleClass('sticky');
        });
    });

});