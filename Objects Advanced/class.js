class Client{
	constructor(name,balance){
		this.name=name;
		this.balance=balance;
	}
	membership(){
		let name;
		if(this.balance>1000){
			name='Gold';
		}
		else if(this.balance>500 & this.balance<1000){
			name='Platinum';
		}
		else{
			name='Standard';
		}
		return name;
	}
	clientInfo(){
		return `Name:${this.name},Balance:${this.balance},Membership:${this.membership()}`;
	}
	//withdraw(amount){
	//	this.balance-=amount;
	//}
	getBalance(amount){
		return this.balance;
	}
	//static method that does not require intantiation
	static welcome(){
		return('Welcome to the bank');
	}
}
//const mary=new Client('Mary',1000);
//console.log(mary);
//console.log(mary.clientInfo())
//console.log(Client.welcome());

class Business extends Client{
	constructor(name,balance,phone,category){
		//access the parent constructor properties
		super(name,balance);
		this.phone=phone;
		this.category=category;
	}
	clientInfo(){
		return `Name:${this.name},Balance:${this.balance},Membership:${this.membership()},Phone:${this.phone},Category:${this.category}`;
	}
	static welcome(){
		return 'Welcome to the Secret Shop';
	}
}
//instantiate the sub class

const business=new Business('Civil Homes',10000000,4420333,'Real Estate');
console.log(business);
console.log(business.clientInfo());
console.log(Business.welcome());
console.log(Client.welcome());