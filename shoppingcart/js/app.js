//variables
const courses=document.getElementById('courses-list');
const shoppingCartContent=document.querySelector('#cart-content tbody'),
	clearCartBtn=document.querySelector('#clear-cart');


//listeners
loadEventListeners();
function loadEventListeners(){
	courses.addEventListener('click',buyCourse);
	shoppingCartContent.addEventListener('click',removeCourse);
	clearCartBtn.addEventListener('click',removeAll);
	document.addEventListener('DOMContentLoaded',getFromLocalStorage);
}



//functions
function buyCourse(e){
	//console.log('course added');
	e.preventDefault();
	//use delegation to find the course that was added to the shopping cart
	//console.log(e.target);
	if(e.target.classList.contains('add-to-cart')){
		//console.log(e.target.parentElement.innerHTML);
		const course=e.target.parentElement.parentElement;
		//read the values
		getCourseInfo(course);
	}
}
function getCourseInfo(course){
	//console.log(course);

	//create an object with course data
	const courseInfo={
		image:course.querySelector('img').src,
		courseTitle:course.querySelector('h4').textContent,
		price:course.querySelector('.price span').textContent,
		id:course.querySelector('a').getAttribute('data-id')
	}
	//console.log(courseInfo);
	//insert into shopping cart
	addIntoCart(courseInfo);
}
//display course into shopping cart
function addIntoCart(course){
	//console.log(course);
	const row=document.createElement('tr');
	row.innerHTML=`
		<tr>
			<td>
				<img src="${course.image}" width=100>
			</td>
			<td>
				${course.courseTitle}
			</td>
			<td>
				${course.price}
			</td>
			<td>
				<a href="#" class="remove" data-id="${course.id}">X</a>
			</td>
		</tr>
	`
	//add into the shopping cart
	shoppingCartContent.appendChild(row);
	//save into storagr
	saveIntoStorage(course);
}
//add the courses into storage
function saveIntoStorage(course){
	//get contents from storage
	let courses=getCoursesFromStorage();
	//add courses into the array
	courses.push(course);
	//since courses only stores string, convert course to string
	localStorage.setItem('courses',JSON.stringify(courses));

}
function getCoursesFromStorage(){
	let courses;
	//if something exists, get the value else, create an empty array
	if(localStorage.getItem('courses')===null){
		courses=[];
	}
	else{
		courses=JSON.parse(localStorage.getItem('courses'));
	}
	return courses;
}
//remove course from list
function removeCourse(e){
	let course,courseId;
	//remove from the DOM
	if(e.target.classList.contains('remove')){
		e.target.parentElement.parentElement.remove();
		course=e.target.parentElement.parentElement;
		courseId=course.querySelector('a').getAttribute('data-id');
	}
	//console.log(course);
	//console.log(courseId);
	//funtion to delete everything from storage
	removeCourseLocalStorage(courseId);
	//console.log(id);
}
//function to remove a specific course
function removeCourseLocalStorage(id){
	//get local storage data
	let coursesLS=getCoursesFromStorage();
	//loop through the array and find the index to remove
	coursesLS.forEach(function(courseLS,index){
		if(courseLS.id===id){
		coursesLS.splice(index,1);
	}
	});
	//add the new array to LS
	localStorage.setItem('courses',JSON.stringify(coursesLS));
	//console.log(id);
}
//function to clear the cart
function removeAll(){
	//shoppingCartContent.innerHTML=''; OR,

	while(shoppingCartContent.firstChild){
		shoppingCartContent.removeChild(shoppingCartContent.firstChild);
	}
	clearLocalStorage();
}
//clears the whole localStorage
function clearLocalStorage(){
	localStorage.clear();
}

//loads when document is ready and prints courses into shopping cart
function getFromLocalStorage(){
	let coursesLS=getCoursesFromStorage();

	//loop through the courses and print into the cart
	coursesLS.forEach(function(course){
		//create the <tr>
		const row=document.createElement('row');
		row.innerHTML=`
			<tr>
			<td>
				<img src="${course.image}" width=100>
			</td>
			<td>
				${course.courseTitle}
			</td>
			<td>
				${course.price}
			</td>
			<td>
				<a href="#" class="remove" data-id="${course.id}">X</a>
			</td>
		</tr>
		`;
		shoppingCartContent.appendChild(row);
	});	

}