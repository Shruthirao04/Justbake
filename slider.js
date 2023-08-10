$(function() {
    // console.log("hey");
    $('.myslider').slick( {
        autoplay: true,
        // autoplaySpeed: 2000
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
    });
    $('.myslider2').slick( {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
        // dots: true

    });
    // $('.myslider__slide3').slick( {
    //     autoplay: true,
    //     autoplaySpeed: 2000
    // });
});

// $(window).on("load", function() {
//     console.log("window loaded");
// });