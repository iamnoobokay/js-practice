//global variables

const sendButton=document.getElementById('sendBtn'),
	email=document.getElementById('email'),
	subject=document.getElementById('subject'),
	message=document.getElementById('message'),
	reset=document.getElementById('resetBtn'),
	form=document.getElementById('email-form');


//event listeners
eventListeners();
function eventListeners(){
	//app initialization
	document.addEventListener('DOMContentLoaded',appInit);
	email.addEventListener('blur',validate);
	subject.addEventListener('blur',validate);
	message.addEventListener('blur',validate);

	//send and reset button
	reset.addEventListener('click',resetForm)
	form.addEventListener('submit',sendEmail)
}


//functions
function appInit(){
	sendButton.disabled=true;
}

//this is the validate function
function validate(){
	//console.log('funtion is working correctly');
	let errors;
	validateLength(this); //the this keyword refers to the variable that fired this function.
	if(this.type=='email'){
		validateEmail(this);
	}
	//get errors from all the textfields if any
	errors=document.querySelectorAll('.error');
	//if the fields are not blank
	if(email.value!==''&&subject.value!==''&&message.value!==''){
		//if the length of errors is 0 then enable the send button
		if(errors.length==0){
			sendButton.disabled=false;
		}
	}
}
function validateLength(field){
	//console.log(field);
	if(field.value.length>0){
		field.style.borderBottomColor='green';
		field.classList.remove('error');
	}
	else{
		field.style.borderBottomColor="red";
		field.classList.add('error');
	}
}
//validate the email(checks for @ in the value)
function validateEmail(field){
	//console.log(field);
	const emailText=field.value;
	if(emailText.indexOf('@')!==-1){
		field.style.borderBottomColor='green';
		field.classList.remove('error');
	}
	else{
		field.style.borderBottomColor="red";
		field.classList.add('error');
	}
}
//if reset button is pressed, this function is called
function resetForm(){
	form.reset();
}
function sendEmail(e){
	e.preventDefault();
	//show the spinner
	const spinner=document.getElementById('spinner');
	spinner.style.display='block';

	//create the email image
	const sendEmailImage=document.createElement('img');
	sendEmailImage.src='img/mail.gif';
	sendEmailImage.style.display='block';
	
	//hide spinner and show email sent
	setTimeout(function(){
		//hide spinner
		spinner.style.display='none';
		document.getElementById('loaders').appendChild(sendEmailImage);
		setTimeout(function(){
			form.reset();
			sendEmailImage.remove();
		},5000);
	},3000);
}