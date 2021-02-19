class UI{
	constructor(){
		this.init();
	}
	init(){
		this.displayDiv=document.getElementById('result')
	}
	displayGiphys(result){
		const giphyList=giphy.getGiphysApi(result)
		.then(giphys=>{
			//console.log(giphys);
			this.printResult(giphys);
		})
		.catch(error=>{
			console.log(error);
		})
	}
	printResult(display){
		//console.log(display.giphys.data);
		const giphyResults=display.giphys.data;
		//console.log(giphyResults);
		if(giphyResults.length==0){
			alert('Result Not Found');
		}
		else{
			console.log(giphyResults);
			let htmlTemplate='';
			giphyResults.forEach(giphyResult=>{
				htmlTemplate+=`
					
					<img src="${giphyResult.images.downsized.url}">
				`;
				this.displayDiv.innerHTML=htmlTemplate;
			})

		}
	}
}