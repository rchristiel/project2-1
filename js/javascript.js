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


var slideIndex = 0;
showSlides();
function showSlides() {
	
	var i;
	var slides = document.getElementsByClassName("mySlides");
	
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
	    slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 3500);
	
}