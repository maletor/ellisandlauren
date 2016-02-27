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

  var $grid = $('#photo-gallery').imagesLoaded(function() {
    $grid.masonry({
      columnWidth: 0,
      itemSelector: '.item',
      gutter: 30
    });
  });

  $('.gallery-popup').magnificPopup({
    type: 'image',
    closeBtnInside: true,
    removalDelay: 300,
    gallery: {
      enabled: true,
      preload: [0,2],
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)'
    }
  });

  var wow = new WOW({ mobile: false });
  wow.init();
});
