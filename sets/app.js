//create a set

//a set is similar to array but cannot have duplicate objects

let shoppingCart=new Set();
shoppingCart.add('Shirt');
shoppingCart.add('Pant');
shoppingCart.add('Shoes');
shoppingCart.add('Shirt');
shoppingCart.add('Guitar');


console.log(shoppingCart.size);

console.log(shoppingCart.has('Pant'));


shoppingCart.delete('Guitar');
//shoppingCart.clear();
//console.log(shoppingCart);

//shoppingCart.forEach((product,index,isPart) =>{
//	console.log(`${index }:${product}`);
//	console.log(isPart===shoppingCart);//
//})

console.log(shoppingCart); 

//convert set to array

const shoppingCartArray=[...shoppingCart];
console.log(shoppingCartArray);
