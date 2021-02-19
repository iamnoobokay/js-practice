//console.log("hello");
document.querySelector('#myForm').addEventListener('submit',saveBookmark);

function saveBookmark(e){
    //console.log(e);
    e.preventDefault();
    //console.log("I work");
    const siteName=document.getElementById('siteName').value;
    //console.log(siteName);
    const siteUrl=document.getElementById('siteUrl').value;
    //console.log(siteUrl);

    if(!siteName||!siteUrl){
        alert('Please fill in the form');
        return false;
    }
    const bookmark={
        name:siteName,
        url:siteUrl
    }

    /*
    //local storage test
    localStorage.setItem('test','HelloWorld');
    console.log(localStorage.getItem('test'));
    //console.log(bookmark);
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */

    //test if bookmarks is null
    if(localStorage.getItem('bookmarks')===null){
        //init array
        let bookmarks=[]
        //add to array
        bookmarks.push(bookmark);
        //set to localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks)); 
    }
    else{
        //fetch bookmarks from localStorage
        var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark to array
        bookmarks.push(bookmark);
        //Reset back to localStorage
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    fetchBookmarks();
}
function deleteBookmark(url){
    //console.log(url);
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks 
    for(var i=0;i<bookmarks.length;i++){
        if(bookmarks[i].url==url){
            //remove from array
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmarks();
}
//fetch bookmarks
function fetchBookmarks(){
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

    var bookmarksResults=document.getElementById('result');

    //Build Output
    bookmarksResults.innerHTML="";
    for(let i=0;i<bookmarks.length;i++){
        var name=bookmarks[i].name;
        var url=bookmarks[i].url;

        bookmarksResults.innerHTML+= '<div class="result">'+
                                    '<h3>'+name+
                                    '<a class="button-style" target="_blank" href="'+url+'">Visit</a> '+
                                    '<a onclick="deleteBookmark(\''+url+'\')" class="button-style" href="#">Delete</a> '+
                                    '</h3>'+
                                    '</div>';
    }

    //console.log(bookmarks);
}