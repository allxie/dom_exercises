// Your code here
window.onload = function myScript(){
// 1.) ALERT
var showPopUp = function () {
  alert("the button was clicked");
}

var button = document.getElementById("clicker");
button.addEventListener("click", showPopUp);

// 2.) Hover over change background

var hoverBackground = function() {
	mouser.style.background= "yellow";
}
var noHoverBackground = function() {
	mouser.style.background= "green";
}

var square = document.getElementById("mouser");
square.addEventListener("mouseover", hoverBackground);
square.addEventListener("mouseout", noHoverBackground);


// 3.) Listen for submit, alert the text from the field

//We have a submit button--let's call it submit
var submitT = document.getElementById("submit");
//when you click it, do alertText
submitT.onclick = stopDefAction;
submitT.onclick = alertText;
//here's what you're going to do when we click...
var alertText = function() {
//let's call the stuff in user input 'field.''
	var field = document.getElementById("userInput");
	//say the thing when we click.
	var userWords = field.value;
	alert(userWords);
};
function stopDefAction(event) {
    event.preventDefault();
};
// 5.) //figure out which veggie was clicked and alert it. 

var veg = document.getElementById('vegetables');
// veg.onclick = alert("WTF");

var alertVeg = function() {
	var x = event.target;
	alert(x.innerHTML);
}
veg.addEventListener("click", alertVeg);


// veg.addEventListener('click', function(){
// 	var x = event.target;
// 	alert(x.innerHTML);
// });



};






