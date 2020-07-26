$('.owl-carousel').owlCarousel({
  loop:true,
        margin:10,
        nav:true,
        autoplay:true,
  responsive:{
  0:{
      items:1
  },
  600:{
      items:2
  },
  1000:{
      items:3
  },
  1200:{
      items:4
  }
  }
  });

  
$('.sort-content').click(function(){
  $('.sort-dropdown').toggleClass('hienra');
});

// $(document).ready(function() {
//   $(".Basketball").on("click", function() {
//         $(".running-card").addClass("hide");
        
//   });
 
// });

$('.dropdown-toggle').click(function(){
  $('.navbar-collapse').toggleClass('height-menu');
  
});


$('.color-blue3').hover(function(){
$('.top3').toggleClass('opacity');
  $('.center3').toggleClass('opacity');

});
$('.color-red3').hover(function(){
  $('.bottom3').toggleClass('opacity');
$('.center3').toggleClass('opacity');
  });
  
//giay1
  $('.color-gree1').hover(function(){
    $('.top1').toggleClass('opacity');
      $('.center1').toggleClass('opacity');
    });

      $('.color-red1').hover(function(){
        $('.bottom1').toggleClass('opacity');
      $('.center1').toggleClass('opacity');
        });

        $('.color-white1').hover(function(){
          $('.top1').toggleClass('opacity');
            $('.bottom1').toggleClass('opacity');
          });


    // $('.basketball').hover(function(){
    //   $('.running-card').toggleClass("hide");
    // });
    // $('.running').hover(function(){
    //   $('.jordan-card').toggleClass('hide');
    //   $('.Lifestyle-card').toggleClass('hide');
    // });
    // $('.jordan').hover(function(){
    //   $('.running-card').toggleClass("hide");
    //   $('.Lifestyle-card').toggleClass('hide');
    // });
    //giay2
    $('.color-black21').hover(function(){
        $('.bottom2').toggleClass('opacity');
      });



      $('.basketball').hover(function(event) {
        $('.product-hot').addClass('showing');
        $('.running-card').css('display','none');
        $('.jordan-car').css('display','none');
        $('.Lifestyle-card').css('display','none');
        $(this).addClass('font-weight');
        $('.running').removeClass('font-weight');
        $('.jordan').removeClass('font-weight');
        
         });
         $('.running').hover(function(event) {
          $('.product-hot').removeClass('showing');
          $('.product-hot').addClass('hide');
          $('.running-card').css('display','block');
          $('.jordan-car').css('display','block');
          $('.Lifestyle-card').css('display','none');
          $(this).addClass('font-weight');
          $('.basketball').removeClass('font-weight');
          $('.jordan').removeClass('font-weight');
         
           });
           $('.jordan').hover(function(){
            $('.jordan-car').css('display','block');
            $('.running-card').css('display','none');
            $('.Lifestyle-card').css('display','block');
            $(this).addClass('font-weight');
            $('.basketball').removeClass('font-weight');
            $('.running').removeClass('font-weight');
          });
    
           //Filter product-hot
           $('.sort-item.best-seller').click(function(){
            $('.name-price-big').removeClass('showing-inline');
            $('.name-price-small').removeClass('showing-inline');
            $('.name-price-big').removeClass('showing-inline');
            $('.name-new').addClass('hide');
            $('.name-hot').addClass('showing-inline');
            $('.name-price-big').removeClass('showing-inline');
            $('.jordan-car').addClass('hide');
            $('.running-card').addClass('hide');
            $('.Lifestyle-card').addClass('hide');
            $('.product-hot').addClass('showing');
            $('.running-card').removeClass('showing');
            $('.Lifestyle-card').removeClass('showing');
            $('.jordan-car').removeClass('showing');
          });
             //Filter product-small
             $('.sort-item.low-to-high-price').click(function(){
              $('.name-new').addClass('hide');
              $('.name-hot').removeClass('showing-inline');
              $('.name-price-small').addClass('showing-inline');
              $('.name-price-big').removeClass('showing-inline');
              $('.running-card').removeClass('showing');
              $('.running-card').addClass('hide');
              $('.Lifestyle-card').removeClass('showing');
              $('.jordan-car').addClass('showing');
              $('.product-hot').removeClass('showing');
            });


           //Filter product-big
          $('.sort-item.high-to-low-price').click(function(){
            $('.name-new').addClass('hide');
            $('.name-hot').removeClass('showing-inline');
            $('.name-price-small').removeClass('showing-inline');
            $('.name-price-big').addClass('showing-inline');
            $('.running-card').removeClass('showing');
            $('.running-card').addClass('hide');
            $('.Lifestyle-card').addClass('showing');
            $('.jordan-car').addClass('showing');
            $('.product-hot').addClass('showing');
          });


          // $('.sort-dropdown .sort-item.active').click(function(){
          //   $('.name-new').removeClass('hide');
          //   $('.name-hot').removeClass('showing-inline');
          //   $('.product-hot').addClass('hide');
          //   $('.running-card').addClass('showing');
          //   $('.Lifestyle-card').addClass('showing');
          //   $('.name-price-small').removeClass('showing-inline');
          //   $('.name-price-big').removeClass('showing-inline');
          // });
         

          $(document).ready(function(){

            $(window).scroll(function(){
              if($(this).scrollTop() > 40){
                $('#topBtn').fadeIn();
              } else{
                $('#topBtn').fadeOut();
              }
            });
          
            $("#topBtn").click(function(){
              $('html ,body').animate({scrollTop : 0},800);
            });
          });
         
          


    