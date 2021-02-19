class UI{
	constructor(){
		this.init();
	}
	init(){
		this.printCryptoCurrencies();
	}
	//prints the <option> for the form
	printCryptoCurrencies(){
		cryptoApi.getCryptoCurrencyList()
			.then(data=>{
				//console.log(data);
				const cryptoCurrencies=data.cryptoCurrencies;
				//console.log(cryptoCurrencies);

				//build the select from the RestApi
				const select=document.getElementById('cryptocurrency');
				cryptoCurrencies.forEach(currency=>{
					//<add the options>
					const option=document.createElement('option');
					option.value=currency.id;
					
					option.appendChild(document.createTextNode(currency.name));
					select.appendChild(option);
				})
			})
			.catch(error=>{
				alert(error);
			})
	}
	//print a message when form is empty
	printMessage(message,className){
		const div=document.createElement('div');
		//add the classes
		div.className=className;
		//add the message
		div.appendChild(document.createTextNode(message));

		const messageDiv=document.querySelector('.messages');
		messageDiv.appendChild(div);

		//remove the message
		setTimeout(()=>{
			document.querySelector('.messages div').remove();
		},3000)
	}
	//prints the result of the valuation/rate
	displayResult(result,currency){
		//console.log(result);
		//console.log(currency);

		//read the currency
		let currencyName;
		currencyName='price_'+currency.toLowerCase();
		//console.log(currencyName);
		//read the result from the object
		const value=result[currencyName];

		//remove the previous result
		const prevResult=document.querySelector('#result>div');
		if(prevResult){
			prevResult.remove();
		}

		let htmlTemplate='';
		htmlTemplate+=`
			<div class="card cyan darken-3">
				<div class="card-content white-text">
					<span class="card-title">Result</span>
					<p>The price of ${result.name} in ${currency} is ${value}</p>
					<p>Last Hour: ${result.percent_change_1h}%</p>
					<p>Last Day: ${result.percent_change_24h}%</p>
					<p>Last 7 Days: ${result.percent_change_7d}%</p>
				</div>
			</div>
		`;
		//print the spinner
		this.showSpinner();

		//After 3 seconds print the result and hide the spinner

		setTimeout(()=>{
			const divResult=document.getElementById('result');
			divResult.innerHTML=htmlTemplate;

			//hide the spinner
			document.querySelector('.spinner img').remove();
		},3000)

		
	}
	//show the spinner
	showSpinner(){
		const spinnerGIF=document.createElement('img');
		spinnerGIF.src='img/spinner.gif';
		document.querySelector('.spinner').appendChild(spinnerGIF);
	}
}