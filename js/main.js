window.onload = function() {
    document.getElementById('contact_form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validation()){
            emailjs.sendForm('service_1gorb3f', 'contact_form', this)
            .then(function() {
            console.log('SUCCESS!');
        },function (error){
            console.log('FAILED...', error);
        });
        window.alert("Thanks! Your message has been sent to Wenxuan ᵔ◡ᵔ");
        document.getElementById("contact_form").reset();
        }
    });
}

function fnameValidation(){
    document.getElementById("user_fname").style.border = "5px solid LightBlue";
    if (document.getElementById("user_fname").value == ""){
        document.getElementById("user_fname").style.border = "5px solid Lightpink";
        document.getElementById("user_fname").placeholder = "Please enter your first name here";
        window.alert("Oops! FIRST NAME needs some words ˃̣̣̥᷄⌓˂̣̣̥᷅");
        return false;
    }
    else {
        return true;
    }
}

function lnameValidation(){
    document.getElementById("user_lname").style.border = "5px solid LightBlue";
    if (document.getElementById("user_lname").value == ""){
        document.getElementById("user_lname").style.border = "5px solid Lightpink";
        document.getElementById("user_lname").placeholder = "Please enter your last name here";
        window.alert("Oops! LAST NAME needs some words ˃̣̣̥᷄⌓˂̣̣̥᷅");
        return false;
    }
    else{
        return true;
    }
}
function emailValidation(){
    document.getElementById("user_email").style.border = "5px solid LightBlue";
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("user_email").value)){
        return true;
    }
    else{
        document.getElementById("user_email").style.border = "5px solid Lightpink";
        document.getElementById("user_email").placeholder = "Please enter your valid email address here: xyz@<domain>.<top-level domain>";
        window.alert("Oops! Something wrong with your EMAIL ADDRESS ˃̣̣̥᷄⌓˂̣̣̥᷅ \n!!!Example here: xyz@<domain>.<top-level domain>");
        return false;
    }
}

function phoneValidation(){
    document.getElementById("user_phone").style.border = "5px solid LightBlue";
    if(/[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(document.getElementById("user_phone").value)){
        return true;
    }
    else{
        document.getElementById("user_phone").style.border = "5px solid Lightpink";
        document.getElementById("user_phone").placeholder = "Please enter your valid phone number here: 123-456-7890";
        window.alert("Oops! Something wrong with your PHONE NUMBER ˃̣̣̥᷄⌓˂̣̣̥᷅\nPlease follow the example here: 123-456-7890 ⸝⸝ʚ̴̶̷̆ ̯ʚ̴̶̷̆⸝⸝");
        return false;
    }
}

function messageValidation(){
    document.getElementById("user_message").style.border = "5px solid LightBlue";
    if (document.getElementById("user_message").value == ""){
        document.getElementById("user_message").style.border = "5px solid Lightpink";
        document.getElementById("user_message").placeholder = "Please enter your message here";
        window.alert("Oops! MESSAGE box is so hungry, please feed some words to it ˃̣̣̥᷄⌓˂̣̣̥᷅");
        return false;
    }
    else{
        return true;
    }
}

function validation(){
    return (fnameValidation() & lnameValidation() & emailValidation() & phoneValidation() & messageValidation());
}