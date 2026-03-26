document.querySelector('.btnMenu').addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('active');
});

var image = document.querySelector('.tossCoin img');
var flipper = document.querySelector('[name="flipper"]');
var caller = document.querySelector('[name="caller"]');
var head = document.querySelector('#head');
var tails = document.querySelector('#tails');
var toss = document.querySelector('.btnToss');

function tossFlipping(){
    // Lets Check Validation.
    if(!flipper.value.trim()){
        alert("Please Select Flipper");
        flipper.focus();
        return;
    }
    if(!caller.value.trim()){
        alert("Please Select Caller");
        caller.focus();
        return;
    }
    if (!head.checked && !tails.checked){
        alert("Please Select Head or Tails");
        return;
    }

    var callerChoice;
    if(head.checked){
        callerChoice="HEAD";
    }
    else{
        callerChoice="TAILS";
    }

    var flipResult=Math.random();
    if(flipResult<0.5){
        flipResult="HEAD";
    }
    else{
        flipResult="TAILS";
    }

    image.classList.add('animating');

    setTimeout(function(){
        image.classList.remove('animating');

        var tossResult="";
        if (callerChoice===flipResult)
        {
        //tossResult= caller.value + ' Wins! ' + flipResult.toUpperCase();
        tossResult = `${callerChoice} is the call, and it is ${flipResult}.
        ${caller.value} has won the toss.`
        }
        else{
        //tossResult= flipper.value + ' Wins! ' + flipResult.toUpperCase();
        tossResult = `${callerChoice} is the call, and it is ${flipResult}.
        ${flipper.value} has won the toss.`
        }

        alert(tossResult);

        flipper.value="";
        caller.value="";
        head.checked= false;
        tails.checked= false;

    },1500);
}