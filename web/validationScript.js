function validateForm() {
	console.log("Hello!");
	var name = document.forms["myForm"]["username"].value;
	if (name == null || name == "") {
        alert("Sorry! Username field must be filled out! ");
        return false;
    }
    else
    	console.log(name);
    var email = document.forms["myForm"]["email"].value;
    if(email == null || name == ""){
    	alert("Sorry! E-mail field must be filled out!");
    	return false;
    }
    else{
    	var ok = email.search("@");
    	if(ok<0){
    		alert("Please insert a valid e-mail adress!");
    		return false;
    	}
    	else
    		console.log(email);
    }
    var phone = document.forms["myForm"]["phone"].value;
    console.log(phone);
    var message = document.forms["myForm"]["message"];
    console.log(message);
    
    var open = window.open("form_validation.html");
}