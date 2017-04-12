$(document).ready(function(){

	myFunction();


})


function myFunction() {
	$("#mm").click(function(e){
		e.preventDefault()

		//console.log("Hey, the document is now ready!");
		var input = getInput();
		//debugger;
		grubText(input)
})
}

function grubText(input){
	//debugger;
	$.getJSON( {
     url  : 'https://maps.googleapis.com/maps/api/geocode/json',
     data : {
         sensor  : false,
         address : input
     },
     success : function( data, textStatus ) {
         whatever(data);
     }
 } );//.done(whatever);
	
}

function whatever(json) {
	// var posID = input //json.items[1].id.posId;
	var lat=json.results[0].geometry.location.lat;
	var lng=json.results[0].geometry.location.lng;
	var html=`<iframe
  width="600"
  height="450"
  frameborder="0" style="border:0"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-sw3xpE9qa7A5_vEl8k7Oa9fLIqwmzJc
    &q=${lat},${lng}" allowfullscreen></iframe>`
	$("#aa").html(html)

}


//$('#mm').click(function(){
//	var code = editor.getCode();
//	var iframe = $('#send');
//	iframe.html(code)
//})




function getInput() {
	var input = $('#mt').val();
	return input;
}




// $.getJSON( {
//     url  : 'https://maps.googleapis.com/maps/api/geocode/json',
//     data : {
//         sensor  : false,
//         address : "Erbil"
//     },
//     success : function( data, textStatus ) {
//         console.log( textStatus, data );
//     }
// } );







$(document).ready(function(){
    var $Menu = $('.Img');
    $('.Img').mouseenter(function() {
        $('.PopUp').css('opacity', '1');
        $('.PopUp').css('margin-top', '20px');
    });
        $('.Img').mouseleave(function() {
        $('.PopUp').css('opacity', '0');
        $('.PopUp').css('margin-top', '0px');
    });
    $('.Img').on('click', function() {
        if($Menu.hasClass('Img')){
                $('.Img').addClass('click');
        $('.Img').removeClass('Img');
                $('.Profile').addClass('clickProfile');
                $('.Profile').removeClass('Profile');
                $('.clickPopUp').css('display', 'block');
                $('.PopUp').css('display', 'none');
        }else{
        $('.click').addClass('Img');
        $('.click').removeClass('click');
                $('.clickProfile').addClass('Profile');
                $('.clickProfile').removeClass('clickProfile');
                                $('.clickPopUp').css('display', 'none');
                $('.PopUp').css('display', 'block');
            }
        });
    });









$(document).ready(function(){
  $('#famus').on('click', function(event) {        
             $('.place').toggle('show');
        });



})