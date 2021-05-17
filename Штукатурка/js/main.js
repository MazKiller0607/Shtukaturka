$(document).ready(function(){
  $('.price-wrapper').slick({
    infinite:true,
    slidesToShow:3,
    slidesToScroll:1,
    arrows:false,
    autoplaySpeed:3000,
    PauceOnFocus:false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});

$('.fotorama').fotorama({
  allowfullscreen: true,
  thumbmargin:20
});
  
  $('.feedback-slider').slick({
  dots: false,
  autoplay:false,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<img class="arrow arrow-prevImg" src="img/arrow.png" alt="">',
  nextArrow:'<img class="arrow arrow-nextImg"src="img/arrow.png" alt="">'
});


   