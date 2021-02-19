//variables
const form=document.getElementById('request-quote');
const html=new HTMLUI();

//Event Listeners
eventListeners();
function eventListeners(){
	document.addEventListener('DOMContentLoaded',function(){
	//create <option> for years
	
	html.displayYears();
});
	document.addEventListener('submit',function(e){
		e.preventDefault();
		//console.log('Button clicked');

		//read the value from the forn
		const make=document.getElementById('make').value;
		const date=document.getElementById('year').value;
		//console.log(date);

		//read the radio button
		const level=document.querySelector('input[name="level"]:checked').value;

		//check that all the fields have something selected
		if(make===''||date===''||level===''){
			//console.log(html);
			html.displayError('All the fields are mandatory');
		}
		else{
			//console.log('A-OK');
			//clear the previous quotes
			const prevResult=document.querySelector('#result div')
			if(prevResult!=null){
				prevResult.remove();	
			}
			//make quotation

			const insurance=new Insurance(make,date,level);
			const price=insurance.calculateQuotation(insurance);
			html.showResult(price,insurance);
			//console.log(price);
		}
	});	

}


//ALL THE OBJECTS
//Everything related to the quotation and calculation is in Insurance

function Insurance(make,date,level){
	this.make=make;
	this.date=date;
	this.level=level;


}
//calculate the price for the current insurance
Insurance.prototype.calculateQuotation=function(insurance){
	//console.log(insurance);
	let price;
	let base=2000;
	//get the make
	const make=insurance.make;
	/*
		american=*1.15
		asian=*1.05
		european=*1.35
	*/
	switch(make){
		case '1':
			price=base*1.15
			break;
		case '2':
			price=base*1.05;
			break;
		case '3':
			price=base*1.35;
			break;

	}
	//console.log(price);
	//get the year

	const date=insurance.date;
	//console.log(date);



	//get the difference between the years
	const difference=this.getDateDifference(date);
	//console.log(difference);

	//Each year the cost of the insurance is going to be 3% cheaper
	price=price-((difference*3)*price)/100;
	//console.log(price);

	//check the level of protection
	const level=insurance.level;
	price=this.calculateLevel(price,level);
	//console.log(price);
	return price;
}
//returns the difference between years
Insurance.prototype.getDateDifference=function(date){
	return new Date().getFullYear()-date;
	//console.log(date);
} 
//Adds the value based on the level of protection
Insurance.prototype.calculateLevel=function(price,level){
	/*
	basic insurance is going to increase the value by 30%
	complete insurance is going to increase the value by 50%
	*/
	//console.log(level);

	if(level==='basic'){
		price=price*1.30;
	}
	if(level==='complete'){
		price=price*1.50;
	}
	return price;
}

function HTMLUI(){};

HTMLUI.prototype.displayYears=function(){
	//print the last 20 years 
	//max and minimum year

	const max=new Date().getFullYear(),
		min=max-20;
	//console.log(min);

	//Generate list with the last 20 years
	const selectYears=document.getElementById('year');
	//loop to print all the years
	for(let i=max;i>=min;i--){
	//console.log(i);
	const option=document.createElement('option');
	option.value=i;
	option.textContent=i;
	selectYears.appendChild(option);
}
}
//prints an error
HTMLUI.prototype.displayError=function(message){
	const div=document.createElement('div');
	div.classList='error';
	//insert the message
	div.innerHTML=`<p>${message}</p>`;
	form.insertBefore(div,document.querySelector('.form-group'));
	//remove the message
	setTimeout(function(){
		document.querySelector('.error').remove();
	},3000);
}
//prints the result into the HTML
HTMLUI.prototype.showResult=function(price,insurance){
	//print the result
	const result=document.getElementById('result');

	let make=insurance.make;
	//console.log(make);//returns the id of the make i.e 1 for american 2 for asian and 3 for european
	switch(make){
		case '1':
			make='American'
			break;
		case '2':
			make="Asian"
			break;
		case '3':
			make='European'
			break;
	}
	//console.log(make);


	//create a div with result
	const div=document.createElement('div');

	div.innerHTML=`
		<p class="summary"> Summary:</p>
		<p class='make'>Make: ${make}</p>
		<p class='date'>Year: ${insurance.date}</p>
		<p class='level'>Level: ${insurance.level}</p>
		<p class='total'> Total: $${price} </p>
	`;
	const spinner=document.querySelector('#loading img');
	spinner.style.display="block";
	setTimeout(function(){
		spinner.style.display="none";
		result.appendChild(div);
	},3000);
	//insert into html
	
}