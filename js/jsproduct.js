$('.previous-page').hover(function(){
    $('.image-slider').toggleClass('opacity');
});




$('.owl-carousel').owlCarousel({
loop:true,
      margin:10,
      nav:true,
      autoplay:true,
responsive:{
0:{
    items:1
},
400:{
    items:2
},
600:{
    items:3
},
800:{
    items:4
}
}
})

$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:3
        },
        600:{
            items:5
        }
    }
})
    





 
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


    $('.basketball').hover(function(){
      $('.running-card').addClass('hide');
      
    });
    //giay2
    $('.color-black21').hover(function(){
        $('.bottom2').toggleClass('opacity');
      });

 
    $('.black').click(function(event) {
      $('.image-slide').addClass('opacity');
      $('.image-slider2').addClass('opacity');
        $('.image-slider3').addClass('display-block');
        $('.image-slider2').removeClass('display-block');
        
       });

       $('.red').click(function(event) {
        $('.image-slider3').removeClass('display-block');
        $('.image-slider2').removeClass('opacity');
        $('.image-slide').addClass('opacity');
        $('.image-slider2').addClass('display-block');
         });

         $('.yellow').click(function(event) {
          $('.image-slider2').removeClass('display-block');
          $('.image-slide').removeClass('opacity');
          $('.image-slider3').removeClass('display-block');
          
          
           });



           $(document).ready(function(){
            $('.ex1').zoom();
          });



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
          