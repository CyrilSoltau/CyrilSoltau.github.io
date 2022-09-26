"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_contact").addEventListener("click", () => {
        // get values user entered in textboxes
        const firstLastName = $("#firstlast_name").value;
        const email = $("#email").value;
        const phone = $("#phoneNum").value;
        const list  = $("#email_list").value;
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
});