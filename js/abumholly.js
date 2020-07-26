function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
    item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}




  $('.sort-content').click(function(){
    $('.sort-dropdown').toggleClass('hienra');
  });

  $(document).ready(function() {
    $(".sort-content").on("click", function() {
          $(".sort-dropdown").toggleClass("hienra");
    });
    $('.button-so1').click(function(event) {
    
      $(this).addClass("click-button");
    });
});


$('.sort-content').click(function(event) {
  $('.sort-dropdown').css('display','block');
   });

$('.fashion').click(function (event) {
  $('.item1').css('display', 'none');
  $('.item2').css('display', 'block');
  $('.item3').css('display', 'none');
  $(this).addClass('css-menu');
  $('.Basketball').removeClass('css-menu');
  $('.running').removeClass('css-menu');
  $('.lifestyle').removeClass('css-menu');
});
$('.running').click(function (event) {
  $('.item1').css('display', 'none');
  $('.item2').css('display', 'none');
  $('.item3').css('display', 'none');
  $('.running').addClass('css-menu');
  $('.fashion').removeClass('css-menu');
  $('.Basketball').removeClass('css-menu');
  $('.lifestyle').removeClass('css-menu');
});
$('.Basketball').click(function (event) {
  $('.item1').css('display', 'none');
  $('.item2').css('display', 'block');
  $('.item3').css('display', 'block');
  $(this).addClass('css-menu');
  $('.running').removeClass('css-menu');
  $('.fashion').removeClass('css-menu');
  $('.lifestyle').removeClass('css-menu');
});

$('.lifestyle').click(function (event) {
  $('.item1').css('display', 'none');
  $('.item2').css('display', 'block');
  $('.item3').css('display', 'none');
  $(this).addClass('css-menu');
  $('.running').removeClass('css-menu');
  $('.fashion').removeClass('css-menu');
  $('.Basketball').removeClass('css-menu');
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


