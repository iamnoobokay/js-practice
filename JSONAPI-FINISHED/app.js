document.querySelector('#load').addEventListener('click',loadPosts);


function loadPosts(){
     //create the object
     const xhr=new XMLHttpRequest();

     //open the connection
     xhr.open('GET','http://jsonplaceholder.typicode.com/posts',true);

     //execute a function
     xhr.onload=function(){
          if(this.status===200){
               const response=JSON.parse(this.responseText);
               //console.log(response);

               //print the contents
               let output='';
               response.forEach(function(post){
                    output+=`
                         <h3>${post.title}</h3>
                         <p>${post.body}</p>
                    `;
               });
               document.querySelector('#result').innerHTML=output;
          }
     }
     xhr.send();
}