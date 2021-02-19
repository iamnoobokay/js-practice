const bmi=new BMI();
const ui=new UI();


document.querySelector("button").addEventListener('click',e=>{
	e.target();
	//console.log('clicked');
	const getWeight=document.getElementById('weight').value;
	const getHeight=document.getElementById('height').value;
	//console.log(getWeight);
	//console.log(getHeight);

	//Validate the two fields
	if(getWeight===''||getHeight===''){
		//console.log('Please provide the values');
		ui.displayError('All the fields are mandatory!');
	}	
	else{
		//console.log('success');
		bmi.calculateBmi(getWeight,getHeight);
	}
})