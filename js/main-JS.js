new SmoothScroll('a[href*="#"]' , {
    easing: 'linear',
    speed: 1000
});

new WOW().init();

//responsive menu
$('#toggler').on('click' , function () {
    var nav = $('#nav');
    var toggler = $('#toggler i');
    if(nav.css('right') === '0px'){
        nav.css('right' , '-240px');
        toggler.removeClass('fa-times').addClass('fa-bars');
    }else {
        nav.css('right', '0');
        toggler.removeClass('fa-bars').addClass('fa-times');
    }
});

// scroll
$(window).on('scroll load' , function () {
    if ($(window).scrollTop() > 300) {
        $('#go-to-top').css('opacity' , '1').css('visibility' , 'visible');
    } else {
        $('#go-to-top').css('opacity' , '0').css('visibility' , 'hidden');
    }
});

//drop down menu
$('.fit-btn').click(function(){
    $('nav ul .fit-show').toggleClass("show")
    $('nav ul .first').toggleClass("rotate")
});
$('.nutri-btn').click(function(){
    $('nav ul .nutri-show').toggleClass("show1")
    $('nav ul .second').toggleClass("rotate")
});

//slider carousel
$(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    rtl:true,
    responsive: {
        0: {
            items: 1
        },
        768:
            {
                items: 2
            },
        992: {
            items: 3
        }
    }
});

//counter of stats
$('.counter').counterUp({
    delay: 10,
    time: 1500
});

//change text
lightbox.option({
    'resizeDuration': 300,
    'albumLabel': 'تصویر %1 از %2'
});

//filter
var portfolio = $('#portfolio-container').isotope({
    originLeft: false
});

$('#portfolio-filter li').on( 'click', function() {
$("#portfolio-filter li").removeClass('filter-active');
$(this).addClass('filter-active');

portfolio.isotope({
    filter: $(this).data('filter')
});
});

portfolio.on( 'arrangeComplete', function () {
    if($(window).scrollTop() % 2 == 0)
        $(window).scrollTop($(window).scrollTop() - 1);
    else{
        $(window).scrollTop($(window).scrollTop() + 1);
    }
});

