'use strict'

$(function(){
  $(".box").on("inview",function(event,isInView){
    if(isInView){
      $(this).addClass("fadeInRight");
    }else{
      $(this).removeClass("fadeInRight");
    }
  });
  $(".box2").on("inview",function(event,isInView){
    if(isInView){
      $(this).addClass("fadeInLeft");
    }else{
      $(this).removeClass("fadeInLeft");
    }
  });
  
});


