"use strict";
$(document).ready(function(){
 
  $("#categories h2").click(evt => {
   const h2 = evt.currentTarget;

   $(h2).toggleClass("minus");

   if ($(h2).attr("class") !== "minus" ){
    $(h2).next().hide();
   }
   else{
    $(h2).next().show();
   }
        
    $("#image").attr("src", "");
  });// #categories end

 $(" #web_images a, #language_images a, #database_images a").each( (index, img)  => {
     var imageURL = $(img).attr("href");
    
     var image = new Image();
      image.src = imageURL;
   
    $(img).click (evt => {
        $("#image").attr("src", imageURL ); 
        evt.preventDefault();
    }); // .click end
  });// .each end
});// .ready end