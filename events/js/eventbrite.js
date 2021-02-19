class EventBrite{
	//constructor instantiate
	constructor(){
		this.auth_token='3J7CNQ23MVARI6OA2JIO';
		this.orderBy='date'
	}
	//get categories from the API
	async getCategoriesApi(){
		//query the api
		const categoriesResponse=await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`)
		//console.log(categoriesResponse);

		//return as JSON
		const categories=await categoriesResponse.json();
		return {
			categories
		};
	}
	//get the events from api
	async queryApi(eventName,category){
		const eventsResponse=await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&categories=${category}&token=${this.auth_token}`)
		//Wait for the response and return as json
		const events=await eventsResponse.json();
		return {
			events
		}
	}
}