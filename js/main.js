$('.slider-container').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
});

$('.staff-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});


var hindi = document.querySelector('#hindi');
var english = document.querySelector('#english');

var count = 1;

var interval = setInterval(function () {
    //   alert('interval function running');
    // count += 1;
    if (count == 1) {

        hindi.style.cssText = "opacity:0;transition: 0s all";
        english.style.cssText = "opacity:1;transform:translateY(0);transition: 0.5s all";
        count = 2;

    } else {

        hindi.style.cssText = "opacity:1;transform:translateY(0);transition: 0.5s all";
        english.style.cssText = "opacity:0;transform:translateY(-100%);transition: 0s all";
        count = 1;

    }
}, 5000)



//===================================================== back to top ========================================

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


$('.mobile-humburger').click(function () {
    $('body').toggleClass('nav-open');
});

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    });
});

$('.navigation > ul > li.has-submenu > i').click(function () {
    $(this).parents('.has-submenu').toggleClass('submenu-open');
});
$('.header-close').click(function () {
    $('body').removeClass('nav-open');
})
