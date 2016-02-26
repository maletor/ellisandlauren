$(document).ready(function() {
  "use strict";

  $("#sticker").sticky({ topSpacing: 0 });

  $('.nav-block .nav, footer .nav').onePageNav({
    scrollThreshold: 0.2,
    scrollOffset: 72
  });

  $('.navbar-collapse ul li a').on("click", function() {
    $('.navbar-toggle:visible').click();
  });

  $('.next-arrow a').on("click", function() {
    $('html,body').animate({ scrollTop: $('#story').offset().top - 76 }, 750);
    return false;
  });

  $('a[href="#contact"]').on("click", function() {
    $('html,body').animate({ scrollTop:$('#contact').offset().top - 76 }, 750);
    return false;
  });

  $('a[href="#map"]').on("click", function() {
    $('html,body').animate({ scrollTop:$('#map').offset().top - 77 }, 750);
    return false;
  });

  $('#photo-gallery').masonry({
    columnWidth: 0,
    itemSelector: '.item',
    gutter: 30
  });

  $('.gallery-popup').magnificPopup({
    type: 'image',
    closeBtnInside: true,
    removalDelay: 300,

    //mainClass: 'mfp-fade',
    gallery: {
      enabled: true,
      preload: [0,2], // read about this option in next Lazy-loading section
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
      tPrev: 'Previous (Left arrow key)', // title for left button
      tNext: 'Next (Right arrow key)', // title for right button
      //tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    }
  });

  var wow = new WOW({ mobile: false });
  wow.init();
});
