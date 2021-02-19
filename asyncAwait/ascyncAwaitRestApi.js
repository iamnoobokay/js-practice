//Async Await With Rest Api

async function getPosts(){
	//wait until all posts are downloaded
	const response=await fetch("http://jsonplaceholder.typicode.com/posts");

	const data=await response.json();

	return data
}

getPosts()
	.then(posts=>console.log(posts))
	.catch(error=>console.log(error));