$(document).ready(function(){
    $("#word1").slideDown();
 
})

/* Singer Section */
    $("#singer1").click(function(){
        $("#word1").slideToggle(1000);
        $("#word2").css({display:'none'});
        $("#word3").css({display:'none'});
        $("#word4").css({display:'none'});


    })
    
    $("#singer2").click(function(){
        $("#word2").slideToggle(1000);
        $("#word1").css({display:'none'});
        $("#word3").css({display:'none'});
        $("#word4").css({display:'none'});
    })
    
    $("#singer3").click(function(){
        $("#word3").slideToggle(1000);
        $("#word2").css({display:'none'});
        $("#word1").css({display:'none'});
        $("#word4").css({display:'none'});
    })
    
    $("#singer4").click(function(){
        $("#word4").slideToggle(1000);
        $("#word2").css({display:'none'});
        $("#word3").css({display:'none'});
        $("#word1").css({display:'none'});
    })
    
/* End of Singer Section */




/* NavBar */
$('.open').click(function(){
    $('.sidenav').css({ width:'200px'})
    $('#open-text').css({marginLeft :'-300px'})
})

$('.close').click(function(){
    $('.sidenav').css({ width:'0px'})
   $('#open-text').css({marginLeft :'-500px'})
})


/* Scroll smoothly */
$('.sidenav a').click(function(){
    let selected=$(this).attr('href')
    let selectedtop=$(selected).offset().top
    $('body,html').animate({
        scrollTop:selectedtop
    },500)
})


/* End of  NavBar */
        
        
/* Counter section  */  
$(document).ready(function(){
    var countdown = new Date("oct 25, 2023 ").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var today = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countdown - today;
        
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     document.getElementById("clock").innerHTML=`
     <div class="col-3">
     <h2 class="day">${days}  D </h2>
   </div>
   <div class="col-3">
     <h2 class="hours">${hours}  h</h2>
   </div>
   <div class="col-3">
     <h2 class="minutes">${minutes}  m</h2>
   </div>
   <div class="col-3">
     <h2 class="seconds">${seconds}  s </h2>
   </div>

     
     
     `
    
    }, 1000); 
}) 
/* End of counter Section */
        


/* Message Section */
$('textarea').keydown(function() {
var maxcharacter = 100;
var char = maxcharacter-$(this).val().length;
 $('#text100').text(char);
  if(char<=0)
    {
    $('#text100').text("your available character finished");   
    }

});

/* End of Message Section */
