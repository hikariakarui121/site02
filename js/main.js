const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 4000,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
});

// カレンダー
flatpickr("#flatpickr", {
  minDate:"today",
  mode:"range" 
});

$(function(){
  $('.modal-btn').on('click',function(){
      $('#modal').removeClass('hidden');
      $('#mask').removeClass('hidden');
  })
});

$(function(){
  $('.close').on('click',function(){
      $('#modal').addClass('hidden');
      $('#mask').addClass('hidden');
  })
});

// スクロール
// $('a[href^="#"]').click(function(){
//   var speed = 500;
//   var href= $(this).attr("href");
//   var target = $(href == "#" || href == "" ? 'html' : href);
//   var position = target.offset().top;
//   $("html, body").animate({scrollTop:position}, speed, "swing");
//   return false;
// });


// タブ
$(function(){
  $('.tab').on('click',function(){
      $('.tab').removeClass('active');
      $(this).addClass('active');

      $('.i-contents').removeClass('active');
      // $('.i-contents').toggleClass('active');
      const clicked =$(this).data('id');
      // alert(clicked);
      $("#" + clicked).addClass('active');
  })
});


// $(function(){
//   const hH = $(window).innerHeight();

//   const onScroll = function(){
//     if( hH > 0 ) {
//       $('#h-nav').addClass('sub');
//       $('#h-nav a').addClass('sub');
//       $('#h-nav img').attr('src', './image/sub-header-logo.png')
//     } else {
//       $('#h-nav').removeClass('sub');
//       $('#h-nav a').removeClass('sub');
//       $('#h-nav img').attr('src', './image/top-header-logo.png')
//     } 
//   };
  
//   $(window).on("scroll", () => {
//     onScroll();
//   });

// });

// $(function(){
//   const scrollY = $(window).pageYOffset;
//   console.log(scrollY);

// });

document.addEventListener('scroll',function(){
  const scrollY = window.pageYOffset;

  if( scrollY > 0 ) {
    document.getElementById('h-nav').classList.add('active');
    document.getElementById('h-nav-sub').classList.add('active');
   
  } else{
    document.getElementById('h-nav').classList.remove('active');
    document.getElementById('h-nav-sub').classList.remove('active');

  }
})

AOS.init({
  easing: 'ease-in',
  duration: 700,

})

