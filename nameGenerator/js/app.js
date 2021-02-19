document.querySelector('#generate-names').addEventListener('submit', loadNames);



// Execute the function to query the API
function loadNames(e) {
     e.preventDefault();


     // Read the values from the form and create the variables
     const origin = document.getElementById('country').value;
     const genre = document.getElementById('genre').value;
     const amount = document.getElementById('quantity').value;

     // Build the URL
     let url = 'http://uinames.com/api/?';
     // Read the origin and append to the url
     if(origin !== ''){
          url += `region=${origin}&`;
     }
     // Read the genre and append to the url
     if(genre !== ''){
          url += `gender=${genre}&`;
     }    
      // Read the amount and append to the url
     if(amount !== ''){
          url += `amount=${amount}&`;
     }
    // console.log(url);
    
     //AJAX CALL
     const xhr=new XMLHttpRequest();

     //open the connection
     xhr.open('GET',url,true);

     //execute the function
     xhr.onload=function(){
          if(this.status===200){
               const names=JSON.parse(this.responseText);
               //console.log(name);

               //Insert into HTMl
               let html=`<h2>Generated Names</h2>`
               html+='<ul class=list>';
               names.forEach(function(name){
                    html+=`<li>${name.name}</li>`;
                    //console.log(name);
               });
               
               html+='</ul>';
               document.querySelector('#result').innerHTML=html;
          }
          else if(this.status===404){
               console.log('The file was not found');
          }
     }
     //send the request
     xhr.send();
}