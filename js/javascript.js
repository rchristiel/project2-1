function init() {
    var button = document.getElementById('button');
    
	var email = document.getElementById("email");
	
	if(email == null) {
		alert("Please enter an email to send us a message!");
		return false;
	} else {
		alert("We'll get back to you soon!");
		return true;
	}
}