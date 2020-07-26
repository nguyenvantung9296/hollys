$(document).ready(function(){
    renderComponents();
  });
  
  function renderComponents(){
  
    $.each(data, function(key,value){
      if(key % 3 === 0){
        $('.outer-container').append('<div class="row"></div>');
      }
  
      $('.row').last().append('<div class="inner-container'+key+'"></div>');
  
      $('.inner-container' + key).load('../../component.html');
  
      setTimeout(function () {
  
        $('.inner-container' + key).find('.name').text(value.name);
        $('.inner-container' + key).find('.display-img').attr('src', value.image);
        $('.inner-container' + key).find('.price').text(value.price);
        $('.inner-container' + key).find('.getProduct').attr('data-product_key', 'product' + key);
  
      }, 100);
    });
  }
  
  function AddToCart(event){
    var parentDiv = $(event).parent().parent().parent();
  
    var name = parentDiv.find('.name').text();
    var image = parentDiv.find('.display-img').attr('src');
    var price = parentDiv.find('.price').text();
    var product_key = $(event).data('product_key');
  
    var data = {
      name: name,
      image: image,
      price: price
    };
  
    var jsonData = JSON.stringify(data)
  
    localStorage.setItem(product_key, jsonData);
  
    window.location.href = "CartPage.html";
  }
  