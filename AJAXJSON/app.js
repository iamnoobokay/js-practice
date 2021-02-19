document.getElementById('button1').addEventListener('click',loadEmployee);
document.getElementById('button2').addEventListener('click',loadEmployees);



function loadEmployee(){
     //create the object
     const xhr=new XMLHttpRequest();

     //open the connection
     xhr.open('GET','employee.json',true);

     //execute the function
     xhr.onload=function(){
          if(this.status===200){
               //get the response as an object
               const employee=JSON.parse(this.responseText);
              // console.log(JSON.parse(this.responseText));

              //Build the template
              const output=`
                    <ul>
                         <li>ID:${employee.id}</li>
                         <li>Name:${employee.name}</li>
                         <li>Company:${employee.company}</li>
                         <li>Job:${employee.job}</li>
                    </ul>
              `;
              document.getElementById('employee').innerHTML=output;
          }
     }
     //send the request
     xhr.send();
}
function loadEmployees(){
     //create the object
     const xhr=new XMLHttpRequest();

     //open the connection
     xhr.open('GET','employees.json',true);

     //execute the function
     xhr.onload=function(){
          if(this.status===200){
               //get the response as an object
               const employees=JSON.parse(this.responseText);
              
              //console.log(employees);
              //Build the template
              let output='';
              employees.forEach(function(employee){
                output+=`
                        <ul>
                        <li>ID:${employee.id}</li>
                        <li>Name:${employee.name}</li>
                        <li>Company:${employee.company}</li>
                        <li>Job:${employee.job}</li>
                        </ul>
                `;
              });
              document.getElementById('employees').innerHTML=output;
          }
     }
     //send the request
     xhr.send();
}