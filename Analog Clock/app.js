var hourHand=document.getElementById('hourhand');
var minuteHand=document.getElementById('minutehand');
var secondHand=document.getElementById('secondhand');

function initClock(){
	var date=new Date();
	//console.log(date);
	var hour=date.getHours() % 12;
	var minute=date.getMinutes();
	var second=date.getSeconds();

	var hourDeg=(hour*30)+(0.5*minute);//every hour 30 degree, 30/60
	var minuteDeg=(minute*6)+(0.1*second);//every minute, 6 degree; 6/60
	var secondDeg=second*6;//360/60

	hourHand.style.transform='rotate('+ hourDeg + 'deg)';
	minuteHand.style.transform='rotate('+ minuteDeg + 'deg)';
	secondHand.style.transform='rotate('+ secondDeg + 'deg)';

	setTimeout(initClock, 1000);
}
initClock();