//VARIABLES
//alert(2);

const form=document.getElementById('add-expense'),
	budgetTotal = document.querySelector('span#total'),
    budgetLeft = document.querySelector('span#left');
let budgetObj,userBudget;
const html = new HTML();
//Event Listeners
eventListeners();
function eventListeners(){
	document.addEventListener('DOMContentLoaded',function(){
		//prompt('hello');
		userBudget=prompt("Enter Budget For This Week:");
		if(isNaN(userBudget)){
			window.location.reload();
		}
		else if(userBudget==''||userBudget<=0){
			window.location.reload();
		}
		else{
			budgetObj=new Budget(userBudget);
			//console.log(budget);
			html.budget(budgetObj.budget);//2 budgets because the first one is an object named budget	
		}
	});
	document.addEventListener('submit',function(e){
		e.preventDefault();
		const expenseName=document.getElementById('expense').value;
		const amount=document.getElementById('amount').value;
		//console.log(amount);
		if(expenseName===''||amount===''){
			//console.log('error');
            html.printMessage('There was error, all the fields are mandatory');
		}
		else{
			html.addExpenseToList(expenseName,amount);
			 html.trackBudget(amount);
		}
	});
	
}



//objects
function HTML(){}
HTML.prototype.budget=function(budget){
	budgetTotal.innerHTML = `${budget}`;
    budgetLeft.innerHTML = `${budget}`;
}
HTML.prototype.printMessage=function(message) {
	//console.log(message);
    const messageWrapper = document.createElement('div');
    //messageWrapper.classList.add('text-center', 'alert');
    messageWrapper.id='gotError';
    messageWrapper.appendChild(document.createTextNode(message));

    // Insert into HTML
    document.querySelector('.primary').insertBefore(messageWrapper, form);


    // Clear the error
    setTimeout(function() {
    document.getElementById('gotError').remove();
    form.reset();
    }, 3000);

}
HTML.prototype.addExpenseToList=function(name,amount){
	const expensesList=document.querySelector('#expenses ul');

	const li=document.createElement('li');
	li.innerHTML = `
        ${name}
        ${amount}
          `;
    expensesList.appendChild(li);

}

HTML.prototype.trackBudget=function(amount){
	const budgetLeftDollars=budgetObj.subtractFromBudget(amount);
	budgetLeft.innerHTML = `${budgetLeftDollars}`;
} 

function Budget(budget){
	this.budget=budget;
	this.budgetLeft=this.budget;
}
Budget.prototype.subtractFromBudget=function(amount){
	 return this.budgetLeft -= amount;
}