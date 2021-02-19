//LocalStorage

//localStorage.setItem('name','Pranav');

//sessionStorage.setItem('name','Pranav');

//localStorage.removeItem('name');

//const name=localStorage.getItem('name');
//alert(name);

//clear storage
//localStorage.clear();

let localStorageContent=localStorage.getItem('names');

let names;

if (localStorageContent===null){
	names=[];
}
else{
	names=JSON.parse( localStorageContent );
}
names.push('Pranav');
names.push('Jon Snow');
names.push('Walter White');
localStorage.setItem('names',JSON.stringify(names));
