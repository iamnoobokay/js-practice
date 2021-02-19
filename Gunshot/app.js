window.onclick=gunshot;
function gunshot(e){
	//clone the image
	var element=document.getElementById('gunshot').cloneNode();

	//append the image into html document
	document.body.appendChild(element);
	//console.log(element);

	//remove the display none style
	element.style.display="";

	//show image at the mouse coordinates
	element.style.left=e.clientX-(element.offsetWidth/2)+'px';
	element.style.top=e.clientY-(element.offsetHeight/2)+'px';
	//add sound effect
	var x = document.createElement("AUDIO");
	x.src="resources/gunsound.mp3";
	x.play();
}