"use strict";
const getDate = () => {
    const currDate = new Date();

    let month = currDate.getMonth() + 1;
    if(month < 10){
        month = "0" + month;
    }

    let day = currDate.getDate();
    if(day < 10){
        day = "0" +day;
    }

    const year = currDate.getFullYear();

    const hours = currDate.getHours();
    let min = currDate.getMinutes();
    if(min < 10){
        min = "0" + min;
    }

    const dateString = `Thank you for Submitting your contact information at ${hours}:${min} on ${month}/${day}/${year}.`;
    return dateString;
};

$(document).ready( () => {
      
    $("#datepicker").datepicker({
        minDate: new Date(),
        maxDate: +45,
        showButtonPanel: true
    })

    
    // 
    $( "#profer" ).selectmenu();

  
   
    // handle click on Join List button
    $("#join_contact").click( evt => {
        let isValid = true;

        // validate the first email address
        const emailPattern = 
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email  = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);

      
        
        // validate the first name entry 
        const firstLastName = $("#firstlast_name").val().trim(); 
        if (firstLastName == "") {
            $("#firstlast_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#firstlast_name").next().text("");
        }
        $("#firstlast_name").val(firstLastName);

          // validate the phone number
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phone = $("#phoneNum").val().trim(); 
        if (phone == "") {
            $("#phoneNum").next().text("This field is required.");
            isValid = false;
        } 
    
        else if ( !phonePattern.test(phone) ) {
            $("#phoneNum").next().text("Use 999-999-9999 format.");
            isValid = false;
        }
        else {
            $("#phoneNum").next().text("");
        }
        $("#phoneNum").val(phone);
           
        // validate the datepicker
        const date = $("#datepicker").val().trim();
        if(date == ""){
            $("#datepicker").next().text("This field is required.");
            isValid = false;
        }
        else{
            $("#datepicker").next().text("");
        }
        $("#datapicker").val(date);

      // validate the email list
        const listPattern = /(^yes$|^no$)/gmi;
       // const listPattern2 = /No/gmi; 
        const list  = $("#email_list").val().trim();
        if(list == ""){
            $("#email_list").next().text("This field is required.");
        }
        else if( !listPattern.test(list) ){
            $("#email_list").next().text("Please enter yes or no");
        }
      
        else{
            $("#email_list").next().text("");
        }
        $("#email_list").val(list);

      //prevent the default action of submitting the form if any entries are invalid 
	   if  (isValid == false) {
           evt.preventDefault();
        }

        if(isValid == true){
        $("#join_contact").submit();
        alert(getDate());
       }
        
    });

    // handle click on Reset Form button
    $("#clear_contact").click( () => {
        // clear text boxes
        $("#email").val("");
        $("#firstlast_name").val("");
        $("#phoneNum").val("");
        $("#datepicker").val("");
        $("#email_list").val("");
        $(".optionclass").val(""); 
       
      

        // reset span elements
        $("#firstlast_name").next().text("*");
        $("#email").next().text("*");
        $("#phoneNum").next().text("*");
        $("#datepicker").next().text("*");
        $("#email_list").next().text("*");
        $(".optionclass").next().text("*");
        
        
        $("#firstlast_name").focus();
    });

    // move focus to first text box
    $("#firstlast_name").focus();
   
   
});






/*const $ = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {

   
     
    $("#join_contact").addEventListener("click", () => {
        // get values user entered in textboxes
        const firstLastName = $("#firstlast_name").value;
        const email = $("#email").value;
        const phone = $("#phoneNum").value;
        const list  = $("#email_list").value;
        //const date  = $("#datepicker").value;
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (firstLastName == "") { 
            errorMessage += "First email is required.\n";
        }
    
        if (email == "") { 
            errorMessage += "Second email is required.\n";
        }
    
         if (phone == "") { 
            errorMessage += "Both emails must match.\n";
        }

        
    
         if (list == "") {
            errorMessage += "First name is required.\n";
        }
    
        // submit the form if error message is an empty string
        if (errorMessage == "") {
           // $("#join_contact").submit();
           alert("Thank you for Signing-up")
        } else {
            alert(errorMessage);            
        }
    });

       
       $("#clear_contact").addEventListener("click", () => {
        $("#firstlast_name").value = "";
        $("#email").value = "";
        $("#phoneNum").value = "";
        $("#email_list").value = "";

        $("#firstlast_name").focus();
    });
    
    $("#firstlast_name").focus();
}); */