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
})

