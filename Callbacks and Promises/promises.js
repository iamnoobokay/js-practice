//promises

const applyDiscount=new Promise(function(resolve,reject){
	//resolve is going to execute when the function is successfull
	//reject is going to execute when the function is unsuccessfull
	const discount=true;
	if(discount){
		resolve('discount applies');
	}
	else{
		reject('discount fails');
	}

});

applyDiscount.then(function(r){
	console.log(r);
}).catch(function(r){
	console.log(r);
})
//console.log(applyDiscount);