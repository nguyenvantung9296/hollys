 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
           
      });

      // Scrolling Effect
         
      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })

      //code phần đổi ảnh sản phẩm màu
      var container =document.getElementById("image-container")
      function change_img(image){
            container.src= image.src;
      }

      //code thời gian chạy trên pander ảnh bìa
      jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        });
      //code phần pander phụ ngăn 2 trang có thời gian đếm ngc
      // function e(){
      //       var e = new Date;
      //       e.setDate(e.getDate() + 7);
      //       var dd = e.getDate();
      //       var mm = e.getMonth() +1 ;
      //       var y = e.getFullYear();
      //       var timedelay = mm +"/" + dd + "/" + y +'12:00:00';
      //       return timedelay;
      // }
      // $('.countdown').downCount({
      //       date : e(),
      //       offset: -4

      // },fuction(){
      //       alert('woot woot,done !');
      // })




       $('document').ready(function() {
        'use strict';
        
      $('.countdown').final_countdown({
            'start': 1362139200,
            'end': 1388461320,
            'now': 1387461319        
        });
    });




 $('#slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
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
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })


