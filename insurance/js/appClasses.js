class Insurance{
	
	constructor(make,date,level){
	this.make=make;
	this.date=date;
	this.level=level;
	}
	calculateQuotation(insurance){
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
getDateDifference(date){
	return new Date().getFullYear()-date;
	//console.log(date);
} 
//Adds the value based on the level of protection
calculateLevel(price,level){
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
}
//calculate the price for the current insurance


class HTMLUI{
	displayYears(){
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
displayError(message){
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
showResult(price,insurance){
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
}

