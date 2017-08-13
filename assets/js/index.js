(function($) {

    $(document).ready(function() {

        $('.hamburger__container').click(function() {
            $('.nav').toggleClass('open');
            $(this).children().first().toggleClass('open');
            $('html, body').toggleClass('noscroll');
        });

    });

})(jQuery);