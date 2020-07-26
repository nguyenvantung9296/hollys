$(function(){
    $('.menu-toggle, .fa-times').on('click',function(){
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
    });

    $('.overlay').on('click',function(){
        $('nav').removeClass('active');
        $('this').removeClass('menu-open');
    });


});
//3D Carousel Using Materialize
// $(document).ready(function(){
//     $('.carousel').carousel();
//   });
  
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
})
$('.owl-carousel1').owlCarousel({
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
        }
    }
})



//review
$('.testimonial-pics img').click(function(){
     $('.testimonial-pics img').removeClass('active');
     $(this).addClass('active');


     $(".testimonial").removeClass('active');
    $("#"+$(this).attr("alt")).addClass("active");

});

$(document).ready(function() {
    $(".reviewrunning").on("click", function() {
          $(".rowreviewproduct").toggleClass("backgroundreview1");
          
    });
    $(".reviewBasketball").on("click", function() {
        $(".rowreviewproduct").toggleClass("backgroundreview2");
    });
    $(".reviewLifestyle").on("click", function() {
        $(".rowreviewproduct").toggleClass("backgroundreview3");
    });
    
});



