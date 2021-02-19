//instantiate all the classes

const eventbrite=new EventBrite();
//console.log(eventbrite);
const ui=new UI();

//listener for the submit button
document.getElementById('submitBtn').addEventListener('click',(e)=>{
	e.preventDefault();
	//console.log('button Clicked');
	const eventName=document.getElementById('event-name').value;
	const categoryName=document.getElementById('category').value;
	//validate the fields
	if(eventName===''){
		//Print a message
		//console.log('All the fields are mandatory');
		ui.printMessage('Add an Event or City','text-center alert alert-danger mt-4');
	}
	else{
		//query the eventBrite api
		//console.log('Here are the events');
		eventbrite.queryApi(eventName,categoryName)
			.then(events=>{
				//console.log(events.events.events.length);
				//check if length is 0
				const eventsList=events.events.events;
				if(eventsList.length==0){
					//console.log("No record of that event");
					ui.printMessage('No results found','text-center alert alert-danger mt-4');
				}
				else{
					//display the events
					ui.displayEvents(eventsList);
				}
			})
	}
})