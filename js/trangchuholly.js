$('.slide-nav').on('click', function (e) {
    e.preventDefault();
    // get current slide
    var current = $('.flex--active').data('slide'),
        // get button data-slide
        next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
        return false;
    } else {
        $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function () {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    }
});



$('.owl-carousel1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})
$('.owl-carousel2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
})


//review
$('.testimonial-pics img').click(function () {
    $('.testimonial-pics img').removeClass('active');
    $(this).addClass('active');


    $(".testimonial").removeClass('active');
    $("#" + $(this).attr("alt")).addClass("active");

});

$(document).ready(function () {
    $(".reviewrunning").on("click", function () {
        $(".rowreviewproduct").toggleClass("backgroundreview1");

    });
    $(".reviewBasketball").on("click", function () {
        $(".rowreviewproduct").toggleClass("backgroundreview2");
    });
    $(".reviewLifestyle").on("click", function () {
        $(".rowreviewproduct").toggleClass("backgroundreview3");
    });

});

// var myAnimation = new hoverEffect({
// parent: document.querySelector('.content-thebest-1'),
// intensity: 0.3,
// image1: 'img/best2.jpg',
// image2: 'img/best1.jpg',
// displacementImage: 'img/stripe1.png'
// });



$('.media3 ul .red-1').click(function () {
    $('.media5-shose1-1').css('opacity', '0');
    $('.media5-shose1-2').css('opacity', '1');
    $(this).css('background', 'red');
});
$('.media3 ul .blue-1').click(function () {
    $('.media5-shose1-1').css('opacity', '1');
    $('.media5-shose1-2').css('opacity', '0');
    $('.media5-shose1-3').css('opacity', '0');
});
$('.media3 ul .white-1').click(function () {
    $('.media5-shose1-1').css('opacity', '0');
    $('.media5-shose1-2').css('opacity', '0');
    $('.media5-shose1-3').css('opacity', '1');
});


$('.blue-2').click(function () {
    $('.media5-shose2-1').css('opacity', '1');
    $('.media5-shose2-2').css('opacity', '0');
    $('.media5-shose2-3').css('opacity', '0');
});
$('.yellow-2').click(function () {
    $('.media5-shose2-1').css('opacity', '0');
    $('.media5-shose2-2').css('opacity', '1');
    $('.media5-shose2-3').css('opacity', '0');
});
$('.red-2').click(function () {
    $('.media5-shose2-1').css('opacity', '0');
    $('.media5-shose2-2').css('opacity', '0');
    $('.media5-shose2-3').css('opacity', '1');
});





$('.red-3').click(function () {
    $('.media5-shose3-1').css('opacity', '0');
    $('.media5-shose3-2').css('opacity', '1');
 
});
$('.yellow-3').click(function () {
    $('.media5-shose3-1').css('opacity', '1');
    $('.media5-shose3-2').css('opacity', '0');
    
});




$('.blue-4').click(function () {
    $('.media5-shose4-1').css('opacity', '0');
    $('.media5-shose4-2').css('opacity', '1');
 
});
$('.white-4').click(function () {
    $('.media5-shose4-1').css('opacity', '1');
    $('.media5-shose4-2').css('opacity', '0');
    
});






$('.red-5').click(function () {
    $('.media5-shose5-1').css('opacity', '0');
    $('.media5-shose5-2').css('opacity', '1');
 
});
$('.blue-5').click(function () {
    $('.media5-shose5-1').css('opacity', '1');
    $('.media5-shose5-2').css('opacity', '0');
    
});




$(document).ready(function() {
    $('#myInput').on('keyup', function(event) {
       event.preventDefault();
       /* Act on the event */
       var tukhoa = $(this).val().toLowerCase();
       $('.media6 span').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa)>-1);
       });
    });
 
 $('th').click(function(event) {
     /* Act on the event */
       event.preventDefault();
       /* Act on the event */
       var tukhoa = $(this).val().toLowerCase();
       $('#mytable tr').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa)>-1);
       });
 
 });
 
  
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




  $(document).ready(function() {

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    
      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
        
        
    
    
      
      
    // document ready  
    });
    
    
    











