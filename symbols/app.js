let firstName=Symbol();
let lastName=Symbol();

//create an empty object

const person={};
person[firstName]="Juan";
person[lastName]="De la Torre"

//standard properties
person.membership='Premium';
person.amount=500;




//console.log(person[firstName]);

for(let i in person){
	//console.log(`${person[i]}`);
}

let clientName=Symbol('Client Name');
let client={};
client[clientName]="Pranav";

console.log(client);
console.log(client[clientName]);
console.log(clientName);