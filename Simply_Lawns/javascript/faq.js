"use strict";
$(document).ready( () => {
	
	// runs when an h2 heading is clicked
    $("#faqs h2").click( evt => {
		const h2 = evt.currentTarget;

		$(h2).toggleClass("minus");

		if ($(h2).attr("class") != "minus") {
		
			   $(h2).next().slideUp( 200, "easeInExpo");
	   	}
	   	else {
	       
			$(h2).next().slideDown(2000, "easeOutExpo");
		   }
		   
		evt.preventDefault();
    }); // end click
    
   
    
}); // end ready
