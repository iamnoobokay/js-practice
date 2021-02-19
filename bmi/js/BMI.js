class BMI{
	calculateBmi(weight,height){
		//console.log(weight);
		const bmiWeight=weight;
		//console.log(bmiWeight);
		const bmiHeight=height*height;
		//console.log(bmiHeight);

		const bmi=bmiWeight/bmiHeight;
		//console.log(bmi);

		if(bmi<18.5){
			//console.log('UnderWeight');
			ui.result(bmi,'You are under weight. Gain some weight!','./images/underweight.jpeg')
		}
		else if(bmi>=18.5 && bmi<25){
			//console.log("healthy");
			ui.result(bmi,'You are healthy. Try and maintain your weight','./images/healthy.jpeg')
		}
		else{
			//console.log("OverWeight");
			ui.result(bmi,'You are over weight. Lose some weight!','./images/overweight.jpeg')
		}
	}
}