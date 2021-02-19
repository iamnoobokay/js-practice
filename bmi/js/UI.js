class UI{
	constructor(){
		this.init();
	}
	init(){
		this.errorDiv=document.getElementById("errorDiv");
		//console.log(this.result);
		this.resultDiv=document.getElementById("result");
	}
	displayError(message){
		//console.log(message);
		let errorHeading=document.createElement('h2');
		errorHeading.className='error';
		errorHeading.appendChild(document.createTextNode(message));
		//console.log(this.result);
		this.errorDiv.appendChild(errorHeading);
		setTimeout(()=>{
			this.removeMessage(errorHeading);
		},3000);
	}
	removeMessage(errorHeading){
		document.querySelector('error')
		//console.log(error);
		if('error'){
			errorHeading.remove();
		}
	}
	result(bmi,report,url){
		//console.log(report);
		//console.log(bmi);
		//console.log(url);

		//remove previous results if any
		const prevResult=document.querySelector('#result>div');
		console.log(prevResult);
		if(prevResult){
			prevResult.remove();
			//document.querySelector('#bmi-form').reset;
		}

		let individualResult=document.createElement('div')
		individualResult.className='individualResult';



		let bmiValue=document.createElement('h1');
		bmiValue.appendChild(document.createTextNode(`Your BMI is ${bmi}`));
		individualResult.appendChild(bmiValue);

		let reportMessage=document.createElement('h2');
		reportMessage.appendChild(document.createTextNode(report));
		individualResult.appendChild(reportMessage);

		let image=document.createElement('IMG');
		image.className='cartoon';
		image.setAttribute('src',url);
		individualResult.appendChild(image);

		this.resultDiv.appendChild(individualResult);		
	}
}