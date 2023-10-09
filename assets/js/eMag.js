//Scroll Effect
$(window).load(function () {

    $('.easing').bind('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 102
        }, 1500, 'easeInOutExpo');

        if ($(window).width() < 768) {
            $('.na').hide();
        }
        event.preventDefault();
    });
})

//Nav Bar
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrollD", $(this).scrollTop() > $nav.height());
    });
});

//Dark Mode Trial 1
$("#dMode").click(function () {
    $("body").toggleClass("dMode");
    $(".nav-link").toggleClass("navLink");
});

//Magazine
$('.flipbook').turn({
    width: 922,
    height: 600,
    elevation: 50,
    gradients: true,
    autoCenter: true
});

$(document).keydown(function (event) {
    if (event.which === 39) {
        $(".flipbook").turn("next");

    } else if (event.which === 37) {
        $(".flipbook").turn("previous");
    }
});







