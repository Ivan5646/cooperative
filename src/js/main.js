$(document).ready(function () {

  var topSlider = $(".top-slider");

  topSlider.slick({
    speed: 1000,
    autoplay: false,
    arrows: false,
    // vertical: true, 
    // verticalSwiping: true,
    // centerMode: true
    // prevArrow: $(".reviews-slider__prev"),
    // nextArrow: $(".reviews-slider__next")
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  topSlider.on('wheel', (function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));

});


