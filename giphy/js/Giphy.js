class Giphy{
	constructor(){
		this.auth_token="yRaQ4uLjXtaypx6AKiAm5gge4YzETOa1";
	}

//get giphys from the api
	async getGiphysApi(search){
		//console.log(search);
		const giphysResponse=await fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${this.auth_token}`)
		const giphys=await giphysResponse.json();
		return{
			giphys
		}
	}
}