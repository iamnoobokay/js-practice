class UI{
	constructor(){
	//App initialization
	this.init();
	}
	init(){
		//display categories
		this.displayCategories();

		//select the results
		this.result=document.getElementById('result');
	}
	//Display events from the API
	displayEvents(events){
		//console.log(events);

		//build the template
		let htmlTemplate='';
		//loop through the events and print the result
		events.forEach(eventInfo=>{
			htmlTemplate += `
                    <div class="col-md-4 mt-4">
                         <div class="card">
                              <div class="card-body">
                                   <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}"> 
                              </div>
                              <div class="card-body">
                                   <div class="card-text">
                                        <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                                        <p class="lead text-info">Event Information:</p>
                                        <p>${eventInfo.description.text.substring(0,200)}...</p>
                                        <span class="badge badge-primary">Capacity: ${eventInfo.capacity}</span>
                                        <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>

                                        <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               
               `;
            this.result.innerHTML=htmlTemplate;	
		})	
	}
	//code to display the categories in the list
	displayCategories(){
		const categoriesList=eventbrite.getCategoriesApi()
			.then(categories=>{
				const categoriesList=categories.categories.categories;
				//console.log(categoriesList);
				const categorySelect=document.getElementById('category');
				//loop through the category and inserts into the list
				categoriesList.forEach(category=>{
					//console.log(category.name);
					const option=document.createElement('option');
					option.value=category.id;
					option.appendChild(document.createTextNode(category.name));
					categorySelect.appendChild(option);
				})
			})
			.catch(error=>{
				alert(error);
			})
	}
	printMessage(message,classes){
		//create a div
		const div=document.createElement('div');
		div.className=classes;
		//add the text
		div.appendChild(document.createTextNode(message));
		//insert into the HTML
		const searchDiv=document.getElementById('search-events');
		searchDiv.appendChild(div);
		//remove the alert after 3 seconds
		setTimeout(()=>{
			this.removeMessage();
		},3000);
	}
	//remove the message
	removeMessage(){
		const alert=document.querySelector('.alert');
		if(alert){
			alert.remove();
		}
	}

}