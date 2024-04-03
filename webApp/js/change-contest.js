function changeContest(){
   //removing prevoius elements
   document.getElementById("container").style.boxShadow = "none";
   var displayelements = document.getElementsByClassName("Info");
   for(var i=0; i<displayelements.length;i++){
      displayelements[i].style.display="none";
   }
   document.getElementById('info-id-login').style.animation="info-log-an 0.5s ease forwards";
   setTimeout(function(){
      var displayelementsLogo = document.getElementsByClassName("LogoLog");
      for(var i=0; i<displayelementsLogo.length;i++){
         displayelementsLogo[i].style.display="none";
      }   
      document.getElementById("logo-id-login").style.animation="info-log-an 0.5s ease forwards";
   },500);

   //displaying new elements
   setTimeout(function(){
      document.getElementById('info-id-login').style.height="0px";
      document.getElementById('logo-id-login').style.height="0px";
      
      document.getElementById('info-id-login').style.zIndex="-2";
      document.getElementById('logo-id-login').style.zIndex="-2";

      document.getElementById("signUp-display").style.display="block";
      document.getElementById("logo-signup-display").style.display="block";

      document.getElementById("signUp-display").style.animation = "info-log-sign-an 0.5s ease forwards"
      document.getElementById("logo-signup-display").style.animation = "info-log-sign-an 0.5s ease forwards"
   },1010)  
}

function changeContestMobile(){
   document.getElementById("container").style.boxShadow = "none";
   var displayelements = document.getElementsByClassName("Info");
   for(var i=0; i<displayelements.length;i++){
      displayelements[i].style.display="none";
   }
   document.getElementById('info-id-login').style.animation="info-log-an 0.5s ease forwards";
   setTimeout(function(){
      document.getElementById('info-id-login').style.height="0px";
      document.getElementById("signUp-display").style.display="block";
      document.getElementById("logo-signup-display").style.animation="info-log-signUp-an 0.5s ease forwards";
   },500)
}