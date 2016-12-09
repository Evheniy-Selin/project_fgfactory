// scroll function
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


(function ($){
    $(window).on('load', function () {
        var prev = $('.slick-prev');
        var next = $('.slick-next');

        var parentCarousel, currentSlide, nextSlide, prevSlide;

        function addClassSlider(self, elem){
            parentCarousel = $(self).closest('.carousel');
            currentSlide =  $(parentCarousel).find('.slick-current');

            nextSlide =  currentSlide.next('.slick-slide');
            prevSlide =  currentSlide.prev('.slick-slide');


            if(elem == 'next'){
                $(currentSlide).addClass('translate-left');
                $(nextSlide).addClass('translate-left');
            }  else{
                $(currentSlide).addClass('translate-right');
                $(prevSlide).addClass('translate-right');
            }

        }

        next.on('mouseover', function(){
            addClassSlider(this, 'next');
        });
        next.on('mouseout', function () {
            $(currentSlide).removeClass('translate-left');
            $(nextSlide).removeClass('translate-left');
        });
        prev.on('mouseover', function(){
            addClassSlider(this, 'prev');
        });
        prev.on('mouseout', function () {
            $(currentSlide).removeClass('translate-right');
            $(prevSlide).removeClass('translate-right');
        })
    })
})(jQuery);