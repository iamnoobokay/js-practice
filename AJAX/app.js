document.getElementById('button').addEventListener('click',loadData);

function loadData(){
	//create new XMLHTTP request object
	const xhr=new XMLHttpRequest();

	//open the connection
	xhr.open('GET','data.txt',true);

	//execution of the AJAX call
	//xhr.onload=function(){
		/*
			statuses
			200:correct
			404:page not found
			403:forbidden
		*/
		/*if(this.status==200){
			document.getElementById('output').innerHTML=`<h1>${this.responseText}<h1>`;
		}*/

		//Another method
		xhr.onreadystatechange=function(){
			//different ready states
			//0=unsent
			//1=opened
			//2=received
			//3=loading
			//4=done
			console.log('Ready State',xhr.readyState);
			if(this.status===200&&this.readyState===4){
				document.getElementById('output').innerHTML=`<h1>${this.responseText}<h1>`;
			}
		}
		xhr.send();
	}
	//send the request
	//xhr.send();
//}