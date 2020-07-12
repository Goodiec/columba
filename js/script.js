$(function(){
    //animate on scroll
    new WOW().init();
});

//Toggle class scrolled on the fixed navbar
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});

$('.carousel').carousel({
    interval: 5000
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
// let owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:3,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//         },
//         600:{
//             items:2,
//         },
//         1000:{
//             items:3,
//         }
//     }
// });

let hero_slides = $('.hero-slides');
hero_slides.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000
});

let featured = $('.featured-carousel');
featured.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    // nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000
});

//To magnify property images
$(function(){
    $("#properties").magnificPopup({
        delegate:'a', //child items selector, by clicking on it popup will open
        type:'image',
        gallery:{
            enabled:true
        }
    });
});