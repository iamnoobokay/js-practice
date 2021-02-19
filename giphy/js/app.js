const giphy=new Giphy();
const ui=new UI();

//Listen For the submit button
document.getElementById('submitBtn').addEventListener('click',e=>{
	e.preventDefault();
	//console.log('clicked');
	const searchParameter=document.getElementById('search-parameter').value;
	//console.log(searchParameter);
	if(searchParameter===''){
		alert('Please enter the value');
	}
	else{
		ui.displayGiphys(searchParameter);
	}
})