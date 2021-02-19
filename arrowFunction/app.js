//Arrow Functions
const learning=()=>'learning Javascript';
	//arrow function does not require return
	//a single line function does not require {}
const object=()=>({message:'hello'});

const parameter=(tech)=>console.log(`Learning Modern ${tech}`)


console.log(learning());
console.log(object());
parameter('Javascript')


//arrow function with a callback
const shoppingCart=['Album','Shirt','Guitar'];
//const productQuantityLength=shoppingCart.map((product)=>{
//	return product.length
//})
//console.log(productQuantityLength);

//OR,

const productQuantityLength=shoppingCart.map(product=>product.length);
console.log(productQuantityLength);


//Arrow Function With forEach
const food=['MO:MO','Chowmein','Pizza','Burger'];
food.forEach(item=>console.log(item));