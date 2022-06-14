

let buttons=document.querySelectorAll("button");
let input=document.querySelector(".screen");


buttons.forEach(function(element){
	element.addEventListener("click",function(){
		
		if(element.innerText==='C'){
			input.value='';
		}
		else if(element.innerText==='DEL'){
			input.value=input.value.slice(0,-1);
		}
		else if(element.innerText==='='){
		
			try{
				input.value=eval(input.value);
			}
			catch{
				input.value='Invalid Input!';
			}
		}
		else{
			if(element.innerText==='X'){
				input.value+='*';
			}
			else{
				input.value+=element.innerText;
			}
		}

	})
})