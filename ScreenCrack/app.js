window.onclick=screencrack;
var x=Math.floor(Math.random()*2);
console.log(x);
function screencrack(e){
	var x=Math.floor(Math.random()*2);
	console.log(x);

	//clone the node
	if(x==1){
	//clone the image
	var crack2=document.getElementById('crack2').cloneNode();

	//append the image into html document
	document.body.appendChild(crack2);
	//console.log(element);

	//remove the display none style
	crack2.style.display="";
	crack2.style.position="absolute";
	//show image at the mouse coordinates
	crack2.style.left=e.clientX-(crack2.offsetWidth/2)+'px';
	crack2.style.top=e.clientY-(crack2.offsetHeight/2)+'px';
	//add sound effect
	var x = document.createElement("AUDIO");
	x.src="resources/Light Bulb Breaking-SoundBible.com-53066515.mp3";
	x.play();
}
 else{
 	var crack1=document.getElementById('crack1').cloneNode();

	//append the image into html document
	document.body.appendChild(crack1);
	//console.log(element);

	//remove the display none style
	crack1.style.display="";
	crack1.style.position="absolute";

	//show image at the mouse coordinates
	crack1.style.left=e.clientX-(crack1.offsetWidth/2)+'px';
	crack1.style.top=e.clientY-(crack1.offsetHeight/2)+'px';
	//add sound effect
	var x = document.createElement("AUDIO");
	x.src="resources/Glass Breaking-SoundBible.com-1765179538.mp3";
	x.play();
 }

}