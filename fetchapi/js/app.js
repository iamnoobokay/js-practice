document.getElementById('button3').addEventListener('click',loadTxt);


function loadTxt(){
	fetch('http://picsum.photos/list')
	.then(message=>message.json())
		//console.log(message);
		//always return the data with the type you want (json,txt etc) to the function
	
	.then(images=>{
		//console.log(data);
		let html='';
		images.forEach(image=>{
			html += `
				<li>
				<a target="_blank" href='${image.post_url}'>
					View Image: 
				</a>
					${image.author}
				</li>
			`
		});
		document.getElementById('result').innerHTML=html;
	})
	.catch(error=>console.log(error))
	
}
