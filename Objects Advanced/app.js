//console.log(2);

//Two ways to create objects

//Using object literals

//const client={
	//name:'Juan',
	//balance:1000,
	//membership:function(){
	//	let name;
	//	if(this.balance>1000){
	//		name='Gold';
	//	}
	//	if(this.balance>500){
	//		name='Platinum';
	//	}
	//	else{
	//		name='Standard';
	//	}
	//	return name;
	//}
//}
//console.log(client);
//console.log(client.name);
//console.log(client.balance);
//console.log(client.membership());



//Object Constructor
//function client(name,balance){
//	this.name=name;
//	this.balance=balance;
//	this.membership=function(){
//		let name;
//
//		if(this.balance>1000){
//			name='Gold';
//		}
//		if(this.balance>500){
//			name='Platinum';
//		}
//		else{
//			name='Standard';
//		}
//		return name;
//	}
//}
//const person=new client('Pranav','2000');
//const person2=new client('Jon','500')

//console.log(person);
//console.log(person.membership());
//console.log(person2);

//STRINGS
//const name1='Pranav';
//const name2=new String('Pranav');

//console.log(name1);
//console.log(name2);

//if(name1==name2){
//}
//if(name1===name2){
//	console.log('same data type');
//}


//NUMBERS
//const number1=20;
//const number2=new Number(30);

//console.log(number1);
//console.log(number2);

//const boolean1=true;
//const boolean2=new Boolean(false);
//console.log(boolean1);
//console.log(boolean2);


//FUNCTIONS
//const function1=function(a,b){
//}
//const function2=new Function('a','b','return a+b');

//console.log(function1(2,3));
//console.log(function2(5,6));


//OBJECTS
//const person1={name:'PRANAV'};
//const person2=new Object({name:'JON'});

//console.log(person1);
//console.log(person2);

//arrays
//const array1=[1,2,3,4,5];
//const array2=new Array(6,7,8,9,0);
//console.log(array1);
//console.log(array2);

//function client(name,balance){
	//this.name=name;
	//this.balance=balance;
//}
//attatch prototype to the method
//client.prototype.membership=function(){
		//let name;

		//if(this.balance>1000){
		//	name='Gold';
		//}
		//else if(this.balance>500 & this.balance<1000){
		//	name='Platinum';
		//}
		//else{
		//	name='Standard';
		//}
		//return name;
	//}
//second prototype with name and balance
//client.prototype.clientInfo=function(){
	//return `Name:${this.name},Balance:${this.balance},Membership:${this.membership()}`;
//}	
//another prototype to withdraw money from the account
//client.prototype.withdraw=function(amount){
//	this.balance-=amount;
//}
//add deposit to account
//client.prototype.deposit=function(amount){
//}
//check the balance
//client.prototype.getBalance=function(){
//	return this.balance;
//}
//const person=new client('Pranav','2000');
//
//console.log(client.prototype);
//console.log(person.clientInfo());
//person.withdraw(999);
//console.log(person.clientInfo());
//person.deposit(500);
//console.log(person.clientInfo());
//person.withdraw(999);
//console.log(person.clientInfo()); 

//function business(name,balance,phone,category){
	//client.call(this,name,balance);
	//this.phone=phone;
	//this.category=category;
//}
//inherit the prototypes
//business.prototype=Object.create(client.prototype);
//Return the constructor as business//
//business.prototype.constructor=business;

//method overriding
//business.prototype.clientInfo=function(){
	//return `Name:${this.name},Balance:${this.balance},Membership:${this.membership()},category:${this.category},
	//phone:${this.phone}`;
//}	


//create a business
//const newBusiness=new business('Udemy',1028381,9742006773,'Education')
//console.log(newBusiness);
//console.log(newBusiness.clientInfo());



//Object Create
const client={
	getBalance:function(){
		return `hello ${this.name} your balance is ${this.balance}`;
	},
	withdraw:function(amount){
		return this.balance -= amount;
	},
	deposit:function(amount){
		return this.balance+=amount;
	}
}
//create a new object and give the balance
const mary=Object.create(client);
mary.name='mary';
mary.balance=1000;

console.log(mary);
console.log(mary.getBalance());

mary.withdraw(500);
console.log(mary.getBalance());

mary.deposit(789);
console.log(mary.getBalance());