class CryptoAPI{
	async queryAPI(currency,cryptocurrenncy){
		//QUERY THE URL
		const url=await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrenncy}/?convert=${currency}`);
		//return as .json
		const result=await url.json();
		//return the object
		return {
			result
		}
	}
	async getCryptoCurrencyList(){
		//console.log('This is working fine');
		const url=await fetch('https://api.coinmarketcap.com/v1/ticker/');
		//return this as json
		const cryptoCurrencies=await url.json();
		//return the object
		return{
			cryptoCurrencies
		}
	}
}