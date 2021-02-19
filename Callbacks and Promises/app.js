//callbacks
//callbacks are basically functions inside a function
//const cities=['London','Newyork','Kathmandu','Paris','Delhi'];

//inline callbacks: functions that don't have a name
//cities.forEach(function(city){
//	console.log(city);
//});

//callbacks with function declaration
//function callback(city){
//	console.log(city);
//}
//cities.forEach(callback);


const countries=['Nepal','India','China','Pakistan','Afganistan','Austria','Sri Lanka'];

function newCountry(country,callback){
	setTimeout(function(){
		//push a new country to the array
		countries.push(country);

		//execute the callback
		callback();
	},2000);
}

//display the countries after 1 second

function displayCountries(){
	setTimeout(function(){
		let html='';
		countries.forEach(function(country){
			html+=`<li>${country}</li>`
		})
		document.body.innerHTML=html;
	},1000);
}
displayCountries();
newCountry('Australia',displayCountries);
