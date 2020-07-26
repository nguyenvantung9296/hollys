$(document).ready(function () {
    renderCartPage();
  });
  
  function renderCartPage(){
    var data = localStorage;
  
    $.each(data,function (key,value) {
      var key_condition = key.substr(0,7);
  
      if(key_condition === 'product'){
        var per_data = $.parseJSON(value);
        console.log(per_data)
  
  
        $('.outer-cart').append('<div class="'+key+'"></div>');
        $('.'+key).load('../../CartPage_component.html');
  
        setTimeout(function () {
  
          $('.'+key).find('.image').attr('src',per_data.image);
          $('.'+key).find('.name').text(per_data.name);
          $('.'+key).find('.price').text(per_data.price);
          $('.'+key).find('.delete').attr('data-product_key',key);
  
        },100);
      }
    });
  }
  
  function DeleteItem(event){
    var key = $(event).data('product_key');
    var anchor = $(event).parent().parent().parent();
  
    anchor.remove();
    localStorage.removeItem(key);
  }
  