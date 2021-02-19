let fact=document.getElementById('fact');
let factText=document.getElementById('fact-text');

let numberInput=document.getElementById('number-input');
numberInput.addEventListener('input',getFactFetch);

/*function getFactAjax(){
	//console.log(123);
	let number=numberInput.value;
	//console.log(number);

	let xhr=new XMLHttpRequest();
	xhr.open('GET',`http://numbersapi.com/${number}`);

	xhr.onload=function(){
		if(this.status==200&&number!=''){
			//console.log(this.responseText);
			fact.style.display='block';
			factText.innerText=this.responseText;
		}
	}
	xhr.send();
}*/
//THE ABOVE CODE IS RUNNING WITH AJAX




function getFactFetch(){
	let number=numberInput.value;

	fetch(`http://numbersapi.com/${number}`)
		.then(response=>response.text())
		.then(data=>{
			//console.log(data);
			if(number!=''){
				fact.style.display='block';
				factText.innerText=data;
			}
		})
		.catch(error=>console.log(error))
}