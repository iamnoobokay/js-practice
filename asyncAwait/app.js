//async await

async function getClients(){
	//create a new promise
	const clients=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve('Client list downloaded...')
		},1000)
	})
	const error=true;

	if(!error){
		const response=await clients;
		//console.log(response);
		return response;
	}
	else{
		await Promise.reject('There was an error');
	}
}
getClients()
.then(function(response){
	console.log(response)
})
.catch(function(error){
	console.log(error)
});