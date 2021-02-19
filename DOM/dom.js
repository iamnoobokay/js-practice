//Examine The Document Object
//console.dir(document);

//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.head);
//console.log(document.body);
//console.log(document.all); 
//console.log(document.all[10]);
//document.all[10].textContent="Hello";//dont use this because if new item is added to html, the 10th value in the array changes
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);


//SELECTORS

//1> GETELEMENTBYID//
//var headerTitle=document.getElementById('header-title');
//headerTitle.textContent="Hello";
//headerTitle.innerText="GoodBye";
//headerTitle.innerHTML='<h3>Hello<h3>'
//above code adds h3 inside h1 and does not change h1
//headerTitle.style.borderBottom='solid 3px #000';


//2>GETELEMENTSBYCLASSNAME//
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent="Hello 2";
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';

//gives error
//items.style.backgroundColor='#f4f4f4'

//for(i=0;i<items.length;i++){
//	items[i].style.backgroundColor='#f4f4f4';
//}


//3>GETELEMENTSBYTAGNAME//
//var li=document.getElementsByTagName('li');
//console.log(li);
//for (var i = 0; i <li.length; i++) {
//	li[i].style.backgroundColor="#f4f4f4";
//}


//3>QUERYSELECTOR//
//queryselector can only select 1 item at maximum
//var header=document.querySelector('#main-header');
////header.style.borderBottom='solid 4px #ccc';

//var input=document.querySelector('input');
////input.value='Hello World';

//var submit=document.querySelector('input[type="submit"]');
//submit.value="Send"

//var item=document.querySelector('.list-group-item');
//item.style.color='red';

//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color='blue';

//var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color='coral';

//var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.color='green';


//4>QUERYSELECTORALL//
//var titles=document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent='Hello';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//console.log(odd);

//for(var i=0;i<odd.length;i++){
	//odd[i].style.backgroundColor="#f4f4f4";
//}


//TRAVERSING THE DOM

//var itemList=document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);

//var main=document.querySelector('#main');
//parentNode
//console.log(main.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4"


//parentElement
//console.log(itemList.parentElement);


//ChildNodes

//console.log(itemList.childNodes);//shows linebreaks

//Children does not print whitespaces i.e linebreaks
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor="yellow";


//FirstChild
//console.log(itemList.firstChild);
//shows whitespace

//firstElementChild
//console.log(itemList.firstElementChild);
//does not show whitespace like firstChild
//itemList.firstElementChild.textContent="Pranav";

//lastChild
//console.log(itemList.lastChild);//shows whitespace

//lastElementChild
//console.log(itemList.lastElementChild);
//does not show whitespace.
//itemList.lastElementChild.textContent='Poudyal';


//var header=document.querySelector('#main-header');
//nextSibling
//console.log(header.nextSibling);
//nextSibling prints whitespaces

//nextElementSibling
//console.log(header.nextElementSibling);
//does not print whitespaces


//previousSibling
//console.log(header.previousSibling);
//previouSibling prints whitespaces.

//previousElementSibling
//console.log(header.previousElementSibling);


//create Element

//create a div
//var newDiv=document.createElement('div');

//add class
//newDiv.className='hello';

//add id
//newDiv.id='hello1';

//add attribute
//newDiv.setAttribute('title','Hello Div');

//create text node

//var newDivText=document.createTextNode('Hello World');

//add text to div
//newDiv.appendChild(newDivText);

//var container=document.querySelector('header .container');
//var h1=document.querySelector('h1');

//container.insertBefore(newDiv,h1);


//EVENT LISTENER
//var button=document.getElementById('button').addEventListener('click',function(){
//	alert('123');
//})

//OR,
//var button=document.getElementById('button').addEventListener('click',buttonClick);

//function for listener
//function buttonClick(e){
	//alert('123');
	//document.getElementById('header-title').textContent='Changed';
	//document.querySelector('#main').style.backgroundColor='#f4f4f4'
	//console.log(e);//e is function parameter

	//console.log(e.target);
	//console.log(e.target.id);
	//console.log(e.target.className);
	//console.log(e.target.classList);
	//var output=document.getElementById('output');
	//output.innerHTML=`<h3>${e.target.id}<h3>`;
	//console.log(e.type);
	//console.log(e.clientX);
	//console.log(e.clientY);
	//console.log(e.offsetX);
	//console.log(e.offsetY)
	//offset works in the element itself and client works on the entire window

	//console.log(e.altKey);
	//console.log(e.shiftKey);
	//console.log(e.ctrlKey);
//}

//MOUSE EVENTS

//var button= document.getElementById('button');
//var box=document.getElementById('box');

//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);

//box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);

//box.addEventListener('mouseover',runEvent);
//box.addEventListener('mouseout',runEvent);

//box.addEventListener('mousemove',runEvent);


var itemInput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');
var select=document.querySelector('select');
//itemInput.addEventListener('keydown',runEvent);
//itemInput.addEventListener('keyup',runEvent);

//itemInput.addEventListener('focus',runEvent);
//itemInput.addEventListener('blur',runEvent);

//itemInput.addEventListener('cut',runEvent);
//itemInput.addEventListener('paste',runEvent);

//itemInput.addEventListener('input',runEvent);
//select.addEventListener('change',runEvent);
//select.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e){
	e.preventDefault();
	console.log(`Event Type: ${e.type}`);
	//console.log(e.target.value); //catch what is being typed.
	//document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';
	//output.innerHTML=`<h3>X-AXIS ${e.offsetX}</h3><h3>y-AXIS ${e.offsetY}</h3>`;
	//box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}