(function($) {

    $(document).ready(function() {

        $('.hamburger__container').click(function() {
            $('.nav').toggleClass('open');
            $(this).children().first().toggleClass('open');
            $('html, body').toggleClass('noscroll');
        });

        // Bacon Ipsum
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1&format=html',
            success: function(data) {
                $('#content').html(data);
            }
        });

    });
})(jQuery);