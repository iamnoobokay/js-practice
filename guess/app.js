function computerGuess(n){
	//the following fuction takes the initial guess of the computer and diplays it. It is also
	//used to hide or show the buttons in the page as required. 
	let low=parseFloat(document.getElementById('low').value);
	let high=parseFloat(document.getElementById('high').value);
	let guess= Math.floor(Math.random() * (high - low + 1) + low);
	document.getElementById('result').innerHTML="The computer guessed "+guess;
	document.getElementById('button1').style.visibility = "visible";
	document.getElementById('button2').style.visibility = "visible";
	document.getElementById('button3').style.visibility = "visible";
	document.getElementById('button').style.visibility = "hidden";
	document.getElementById('refresh').style.visibility = "visible";
}
function play(n){
	//the following function runs when the user presses too high or too low. It slices the div
	//result at the number and takes in the initial guess obtained from computerGuess(n). 
	//it then uses conditionals to set the high and the low value.
	//midpoint elimination is also done here
	var text=(document.getElementById('result').innerHTML);
	var number=parseFloat(text.slice(21));

	var max=parseFloat(document.getElementById('high').value);
	var min=parseFloat(document.getElementById('low').value);
	//console.log(number);
	if(n==1){
		max=Math.floor(number);
		document.getElementById('high').value=max;
	}
	else if(n==2){
		min=Math.floor(number);
		document.getElementById('low').value=min;
	}
	newGuess=Math.floor((max+min)/2);
	document.getElementById('result').innerHTML="The computer guessed "+newGuess;
}
function correct(){
	//the function runs when the correct button is pressed
	document.getElementById('result').innerHTML="You Thought Of The Number "+newGuess;
}
function restart(){
	//the function runs when restart button is pressed
	window.location.reload();
}