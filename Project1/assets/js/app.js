//variables

const tweetList=document.querySelector('#tweet-list');

//event listeners variable
eventListeners();

function eventListeners(){
//Event Listeners
document.querySelector('#form').addEventListener('submit',newTweet);
tweetList.addEventListener('click',removeTweet);
document.addEventListener('DOMContentLoaded',localStorageContent);
}


//functions
function newTweet(e){
	//prevent default
	e.preventDefault();

	//read the textarea value
	const tweet=document.querySelector('#tweet').value;
	//console.log(tweet);

	//create li element
	const li=document.createElement('li');
	li.textContent=tweet;

	//create remove button
	removeTweet=document.createElement('a');
	removeTweet.className=('remove-tweet');
	removeTweet.textContent='X';

	//append removeTweet to li
	li.appendChild(removeTweet);


	//append li to tweetlist
	tweetList.appendChild(li);

	//add tweet to local storage
	addTweetLocalStorage(tweet);

	this.reset();
	//console.log(this);

	
}
function removeTweet(e){
	if(e.target.classList.contains('remove-tweet')){
		//console.log('yes');
		e.target.parentElement.remove();
	}
	
	//console.log(e.target.parentElement.textContent);
	//remove tweet from local storage
	const tweet=e.target.parentElement.textContent;
	//console.log(tweet);
	removeTweetLocalStorage(tweet);

}
function addTweetLocalStorage(tweet){
	//call a function to check for an array or create an empty array so that we can return the empty or defined array
	let tweets=getTweetsFromLocalStorage();
	//add tweet to the array
	tweets.push(tweet);
	//convert tweet into string
	localStorage.setItem('tweets',JSON.stringify(tweets));
}
function getTweetsFromLocalStorage(){
	let Returntweets;
	if(localStorage.getItem('tweets')===null){
		Returntweets=[];
	}
	else{
		Returntweets=JSON.parse(localStorage.getItem('tweets'));
	}
	return Returntweets;
}
//print local storage content on load
function localStorageContent(){
	let tweets=getTweetsFromLocalStorage();
	//console.log(tweets);

	tweets.forEach(function(tweet){
	const li=document.createElement('li');
	li.textContent=tweet;

	//create remove button
	removeTweet=document.createElement('a');
	removeTweet.className=('remove-tweet');
	removeTweet.textContent='X';

	//append removeTweet to li
	li.appendChild(removeTweet);


	//append li to tweetlist
	tweetList.appendChild(li);

	
	})

}

//removes tweet from local storage

function removeTweetLocalStorage(tweet){
	//get tweets from local storage
	//console.log(tweet);
	let tweets=getTweetsFromLocalStorage();
	//console.log(tweets);

	//remove x from tweet
	const tweetDelete=tweet.substring(0,tweet.length-1);
	console.log(tweetDelete);

	//loop through the tweets and remove
	tweets.forEach(function(tweetLS,index){
		if(tweetDelete===tweetLS){
			tweets.splice(index,1);
		}
	})
	localStorage.setItem('tweets',JSON.stringify(tweets));
}
