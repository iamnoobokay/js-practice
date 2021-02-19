 //destructuring

//the old way
/*const client={
	name:'Alexa',
	membership:'Premium'
}
let name=client.name;
let membership=client.membership;

console.log(name);
console.log(membership);/*/
//so to access 100 properties you need 100 variables

//the new way
let name,membership;

const client={
	name:'Alexa',
	membership:'Premium'
}
name='mary';
membership='gold';
({name,membership}=client);//use () so that the two names mary and alexa dont get declared
console.log(name);
console.log(membership);

//Extract object from inside an object
const client2={
	membership:'premium',
	name:'Pranav',
	data: {
		clientLocation:{
			city:'Kathmandu',
			country:'Nepal'
		},
		account:{
			memberSince:2016,
			balance:3000,
		}
	}
}
console.log(client2);
let{data:{clientLocation}}=client2;
console.log(clientLocation);
console.log(clientLocation.country);
console.log(clientLocation.city);

let{data:{account}}=client2;
console.log(account.balance);


//Default values when destructuring
client3={
	name2:"Pranav", 
}
let{name2,membership2='standard',balance2=0}=client3;
console.log(name2);
console.log(balance2);
console.log(membership2);

//Destructuring with arrays
const cities=['New York','Kathmandu','Madrid'];
let[
	firstCity,
	secondCity
]=cities;
console.log(firstCity);
console.log(secondCity);

//more indepth example

const food={
	foodName:'MO:MO',
	price:100,
	data:{
		ingredients:'Meat and Flour',
		cook:{
			steam:"with water",
			fry:"with oil"
		}
	},
	best:{
		place:'Everest Mo:Mo',
		location:'Thamel'
	},
	other:['Bota','Bajey ko Sekuwa','Jhol']
}
console.log(food);
let{
	data:{cook},
	best,
	other:[,,thir]
}=food;
console.log(cook);

console.log(thir);

//destructuring functions old method
/*function reservation(complete,options){
	options=options;
	let payment=options.paymentMethod;
	console.log(options);
	console.log(payment);
}
reservation(true,{
	paymentMethod:"Credit Card",
	amount:"3000",
	days:3
}
);*///first parameter is true and the second one is an object


//Destructuring functions new method
function reservation(complete,options){
	let{paymentMethod,amount,days}=options;
	console.log(paymentMethod);
	console.log(amount);
}
reservation(true,{
	paymentMethod:"Credit Card",
	amount:"3000",
	days:3
}
);

//Destructuring functions new method with default parameters
function reservation2(complete,{
	paymentMethod='cash',
	amount=0,
	days=0
}={}){
	console.log(paymentMethod);
	console.log(amount);
	console.log(days);
}
reservation2(true)
