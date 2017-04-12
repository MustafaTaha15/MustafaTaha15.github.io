$(document).ready(function(){
	$.getJSON('../skill.json',function(i){
		console.log(i);
		var str='<ul>';
		$.each(i.skills,function(d,skill){
			str+="<li><i class="+skill.cssclass+"></i>"+skill.name+"</li>"

		})
		str+='</ul>';

		$('#skills').append(str)
		})



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


})

//str+="<li><i class="+skill.cssclass+">"+"<h4>"+skill.name+"</h4>"+"</li>"








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

