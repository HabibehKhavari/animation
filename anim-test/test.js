$(window).scroll(function() { 
    if ($(".container").offset().top < $(window).scrollTop() + $(window).outerHeight()) {
    $('.container').addClass('animation');
    }
    });