(function($) {

    $(document).ready(function() {

        $('.hamburger__container').click(function() {
            $('.nav').toggleClass('open');
            $(this).children().first().toggleClass('open');
            $('html, body').toggleClass('noscroll');
        });

        // Hipster Ipsum
        $('#content').html('');
        getHipsterParagraph();
        getHipsterParagraph();

    });

    function getHipsterParagraph() {
        $.ajax({
            url: 'http://hipsterjesus.com/api/',
            success: function(data) {
                $('#content').append($('<p></p>').html(data.text))
            }
        });
    }

})(jQuery);