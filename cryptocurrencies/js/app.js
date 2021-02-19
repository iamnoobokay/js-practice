//instantiate the classes

const cryptoApi=new CryptoAPI();
const ui=new UI();

const form=document.getElementById('form');

//add event listener
form.addEventListener('submit',e=>{
	e.preventDefault();

	//read currency
	const currencySelect=document.getElementById('currency').value;
	//read cryptocurrency
	const cryptoCurrencySelect=document.getElementById('cryptocurrency').value;

	//console.log(currencySelect);
	if (currencySelect===''||cryptoCurrencySelect==='') {
		//console.log('All the fields are mandatory');
		ui.printMessage('All the fields are mandatory','deep-orange darken-4 card-panel');
	}
	else{
		//console.log("Success!!");
		//Query the REST API
		cryptoApi.queryAPI(currencySelect,cryptoCurrencySelect)
			.then(data=>{
				//console.log(data.result[0]);
				ui.displayResult(data.result[0],currencySelect);
			})
	}
})