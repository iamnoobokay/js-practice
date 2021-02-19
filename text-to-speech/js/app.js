//Init speech synth api
const synth=window.speechSynthesis;
//console.log(synth);
const form=document.querySelector('form');
const textInput=document.getElementById('text-input');
const rate=document.getElementById('rate');
const pitch=document.getElementById('pitch');
const voiceSelect=document.getElementById('voice-select');
const pitchValue=document.getElementById('pitch-value');
const rateValue=document.getElementById('rate-value');
const body=document.querySelector('body')

//init the voices array
let voices=[];

const getVoices=()=>{
	voices=synth.getVoices();
	//console.log(voices);
	//loop through voices and create option for each voice
	voices.forEach(voice=>{
		//create an option element
		const option=document.createElement('option');
		//fill the option with the voice and language
		option.textContent=voice.name+'('+ voice.lang+ ')';
		//set needed option attributes
		option.setAttribute('data-lang',voice.lang);
		option.setAttribute('data-name',voice.name);
		//console.log(voiceSelect);
		voiceSelect.appendChild(option);
	})
}
getVoices();
if(synth.onvoiceschanged!==undefined){
	synth.onvoiceschanged=getVoices;
}

//speak
const speak=()=>{
	

	//check if speaking
	if(synth.speaking){
		console.error('Already speaking...');
		return;
	}
	if(textInput.value!==''){

		//get speak text
		const speakText=new SpeechSynthesisUtterance(textInput.value);

		//speak end
		speakText.onend=e=>{
			console.log('Done Speaking');
		}

		//speak error
		speakText.onError=e=>{
			console.log('something went wrong');
		}

		//selected voice
		const selectedVoice=voiceSelect.selectedOptions[0].getAttribute('data-name');
		//console.log(selectedVoice);
		//loop through coices in api
		voices.forEach(voice=>{
			if(voice.name===selectedVoice){
				speakText.voice=voice;
			}
		})

		//set pitch and rate
		speakText.rate=rate.value;
		speakText.pitch=pitch.value;
		//speak
		synth.speak(speakText);
	}
};


//EventListener

//text form submit
form.addEventListener('submit',e=>{
	e.preventDefault();
	speak();
	textInput.blur();
});

//Rate value change
rate.addEventListener('change',e=>rateValue.textContent=rate.value)

//pitch value change
pitch.addEventListener('change',e=>pitchValue.textContent=pitch.value)

//voice select change
voiceSelect.addEventListener('change',e=>speak());
