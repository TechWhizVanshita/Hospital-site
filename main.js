// $(document).ready(function(){

//     $('.fa-bars').click(function(){
//         $(this).toggleClass('fa-times');
//         $('.nav').toggleClass('nav-toggle');
//     });

//     $(window).on('load scroll',function(){

//         $('.fa-bars').removeClass('fa-times');
//         $('.nav').removeClass('nav-toggle');

//         if($(window).scrollTop()>10){
//             $('header').addClass('header-active');
//         }
//         else{
//             $('header').removeClass('header-active');
//         }
//     });

//     $('.facility').magnificPopup({
//         delegate: 'a',
//         type: 'image',
//         gallery:{
//             enabled: true
//         }
//     });
// });

$(document).ready(function() {
    $('.fa-bars').click(function() {
      $(this).toggleClass('fa-times');
      $('.nav').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll', function() {
      $('.fa-bars').removeClass('fa-times');
      $('.nav').removeClass('nav-toggle');
  
      if ($(window).scrollTop() > 10) {
        $('header').addClass('header-active');
      } else {
        $('header').removeClass('header-active');
      }
    });
  
    AOS.init({
      delay: 100, // Set the delay to 100ms (default: 0)
      duration: 800 // Set the duration to 800ms (default: 1000)
    });
  
    $('.facility').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });