// main.js

// gnb
$(function(){
  $('#gnb > .depth1 > li').hover(
      function(){
          $('.depth2').stop().show();
          $('#gnb_bg').addClass('show');
      },
      function(){
          $('.depth2').stop().hide();
          $('#gnb_bg').removeClass('show');
      }
  )
});

// lnb(가맹문의, 매장찾기)
$(function(){
  var menu = 0;
  // $('#lnb > .lnb > li > a').removeClass();
  // $('#lnb > .lnb > li > a').eq(menu).addClass('active');

  $('#lnb > .lnb > li > a').click(function(){
      $('#lnb > .lnb > li > a').removeClass();
      $(this).eq(menu).addClass('active');
  });
})

// 매장찾기
$(function(){
  var menu = 0;
  $('.search > .section > .list > li > a').removeClass();
  $('.search > .section > .list > li > a').eq(menu).addClass('active');

  $('.search > .section > .list > li > a').click(function(){
      $('.search > .section > .list > li > a').removeClass();
      $(this).eq(menu).addClass('active');
  });
})

//mainBanner
$(document).ready(function(){

  $('#visual').imagesLoaded(function(){
    $('.slider').bxSlider({
      mode : 'fade',
      pause : 4000,
      auto : true    
    });
  });
});

// product_slide
$(document).ready(function(){
  $('.product_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// sub2_1 신메뉴 베너
$(document).ready(function(){
  $('.slider').bxSlider({
      mode : 'fade',
      pause : 4000,
      auto : true 
  });
});

// 지도
$(function() {
  $('#map > .search').draggable();
});