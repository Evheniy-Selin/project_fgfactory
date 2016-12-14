//slick nav mobile
(function ($) {
    $(function () {
        $('#menu').slicknav();
    })
})(jQuery);


//slick slider
(function ($) {
    $(function () {
        $('.sl_slider').slick({
            dots: true
        });
    });
})(jQuery);

(function ($) {
    $(window).on('load', function () {
        $('body,html').animate({scrollTop: 0}, 100);

        var animateElements = $('[data-animate]');

        $('[data-animate="load"]').addClass('animate');

        function isVisible(elem) {

            var coordinates = elem.getBoundingClientRect();

            var windowHeight = document.documentElement.clientHeight;

            return coordinates.top > 0 && coordinates.top < windowHeight;
        }

        var windowWidth = $(window).width();

        if (windowWidth >= 1024) {
            $(window).on('scroll load', function () {
                for (var i = 0; i < animateElements.length; i++) {
                    if (isVisible(animateElements[i])) {
                        $(animateElements[i]).addClass('animate')
                    }
                }
            })
        } else {
            $('[data-animate="scroll"]').addClass('animate');
        }
    });
})(jQuery);