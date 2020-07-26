
$('#form-resi').on('submit', function() {
	/* Act on the event */
    var istrue = true;
   if($('#login-input').val().trim() ==''){
		$('#login-input').next('span').text('***');
		isTrue = false;
	}else{
		$('#login-input').next('span').text('');
    }
});
$('#form-resi').on('submit', function() {
	/* Act on the event */
    var istrue = true;
   if($('#password-input').val().trim() ==''){
		$('#password-input').next('span').text('***');
		isTrue = false;
	}else{
		$('#password-input').next('span').text('');
    }
});



function submitButton(){
	$('#form-login').validate({
		rules : {
            login :{
           	required: true,
           },
           password :{
           	required: true,
           }
          }
	});
	let validatedata= $('#form-login').valid();
	if(validatedata == true){
		$('#form-login').submit();
	}
};

// 	$(document).ready(function() {
// 		$(".click-login").on("click", function() {
// 			$('.login-shose1').addClass('opacity');
// 			$('.registration').addClass('show');
// 		});	   
//   });


// 	$(document).ready(function() {
// 		$('.click-login').click(function(){
// 			$('#login-shose1').hide();
// 			$('.registration').show();
// 			});
//   });





		