var resultSpan = document.querySelector('span');
var toss = document.querySelector('h1');
var head = document.querySelector(".head");
var tails = document.querySelector(".tails");

function flipToss() {
	var randomNumber = Math.floor(Math.random()*2 +1);
	if(randomNumber===1){
		resultSpan.style.color="red";
		resultSpan.innerHTML ="Head";
		toss.innerHTML="HEAD";
		head.style.background="green";
		tails.style.background="lightseagreen";
	}
	else if(randomNumber===2){
		resultSpan.style.color="red";
		resultSpan.innerHTML ="Tails";
		toss.innerHTML="TAILS";
		head.style.background="lightseagreen";
		tails.style.background="green";
	}
}