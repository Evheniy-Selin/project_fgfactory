// scroll function
;(function ($) {
    var header = $('header');
    var windowHeight = $(window).height();

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > windowHeight / 2) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed')
        }
    });
})(jQuery);


(function ($) {
    $(window).on('load', function () {
        var prev = $('.slick-prev');
        var next = $('.slick-next');

        var parentCarousel, currentSlide, nextSlide, prevSlide;

        function addClassSlider(self, elem) {
            parentCarousel = $(self).closest('.sl_slider');
            currentSlide = $(parentCarousel).find('.slick-current');

            nextSlide = currentSlide.next('.slick-slide');
            prevSlide = currentSlide.prev('.slick-slide');

            if (elem == 'next') {
                $(currentSlide).addClass('translate-left');
                $(nextSlide).addClass('translate-left');
            } else {
                $(currentSlide).addClass('translate-right');
                $(prevSlide).addClass('translate-right');
            }
        }

        next.on('mouseover', function () {
            addClassSlider(this, 'next');
        });
        next.on('mouseout', function () {
            $(currentSlide).removeClass('translate-left');
            $(nextSlide).removeClass('translate-left');
        });
        prev.on('mouseover', function () {
            addClassSlider(this, 'prev');
        });
        prev.on('mouseout', function () {
            $(currentSlide).removeClass('translate-right');
            $(prevSlide).removeClass('translate-right');
        })
    })
})(jQuery);


(function ($) {
    $(window).on('scroll', function () {

    });
})(jQuery);


(function ($) {
    $(window).on('load', function () {
        $('body,html').animate({scrollTop: 0}, 100);

        var animateElements = $('[data-animation]');

        $('[data-animate="load"]').addClass('animate');


        function isVisible(elem) {

            var coords = elem.getBoundingClientRect();

            var windowHeight = document.documentElement.clientHeight;


            var topVisible = coords.top > 0 && coords.top < windowHeight;
            var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

            return topVisible || bottomVisible;
        }


        var windowWidth = $(window).width();

        if (windowWidth > 1024) {
            $(window).on('scroll load', function () {
                var scroll = $(window).scrollTop();
                for (var i = 0; i < animateElements.length; i++) {
                    var offsetTopBlock = $(animateElements[i]).offset().top;
                    var activateHeight = offsetTopBlock * 0.8;

                    if (isVisible(animateElements[i])) {
                        $(animateElements[i]).addClass('animate')
                    }
                }
            })
        } else {
            animateElements.addClass('animate');
        }
    });
})(jQuery);


























