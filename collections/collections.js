//
// Part 1
//

var setBorder = function(){
	var lis = document.getElementsByTagName("li");

	for (var x = 0; x < lis.length; x++){
		lis[x].style.borderBottom = "5px solid black";
	}

}



//
// Part 2
//
var gonnaBeRed = function (){
	var dT = document.getElementsByClassName("datatype");
	for (var x = 0; x < dT.length; x++){
		dT[x].style.color = "red";
	}
}

//
// Part 3
//

var gonnaBeBlue = function(){
	var classes = document.querySelectorAll(".function");
	for (var x = 0; x < classes.length; x++){
		classes[x].style.color= "blue";
	}
}