$(document).ready(function(){
 $(".project").click(function(){
  ajaxGitRequest();
   });
    })
    function ajaxGitRequest(){
    $("#result").html(' ')
    $.get('https://api.github.com/users/MustafaTaha15/repos?sort=created&per_page=5',function(data){ 
    $.each(data,function(i,itm){
     var dt = new Date (itm.created_at); 
     $('#result').append('<div id="result1"><a href='+`${itm['html_url']}`+'>'+`${itm['name']}`+'</a> '+formatDate(dt)+'</div><br/><br>');
      });
       }).fail(function(){alert("Error!")}) 
       } 
       function formatDate(date) {
        var hours = date.getHours();
         var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';
           hours = hours % 12;
            hours = hours ? hours : 12;
           // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
             var strTime = hours + ':' + minutes + ' ' + ampm;
              return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
              }



$(document).ready(function(){
  $('.favoret').on('click', function(event) {        
             $('.tap').toggle('show');
        });



})



$(document).ready(function(){
  $('.project').on('click', function(event) {        
             $('#result').toggle('show');
        });



})





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



