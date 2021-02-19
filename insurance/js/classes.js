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

