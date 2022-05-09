let systemChoiceDisplay=document.getElementById("system-choice");
let playerChoiceDisplay=document.getElementById("player-choice");
let possibleChoices=document.querySelectorAll(".btn");
let displayResult=document.getElementById("displayResult");
let playerChoice;
let systemChoice;
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener("click",(e)=>{
playerChoice=e.target.id;
playerChoiceDisplay.innerHTML=playerChoice;
// console.log(playerChoice);
systemChoice= computerChoice();
console.log(systemChoice);
systemChoiceDisplay.innerHTML=systemChoice;
chkWin();
})); 

function chkWin(){
    if(playerChoice===systemChoice){
        displayResult.innerHTML="It's a draw !!!";
        console.log("its a draw");

    }
    else if(playerChoice=="Rock" && systemChoice=="Paper" || playerChoice=="Scissors" && systemChoice=="Rock" ||playerChoice=="Paper" && systemChoice=="Scissors"){
        displayResult.innerHTML="You Lost the Game !!!";

    }
    else{
        displayResult.innerHTML="You Won the Game !!!";
    }

}
function computerChoice(){
let randomNumber=Math.random()*3;
randomNumber=Math.floor(randomNumber);
// console.log(randomNumber);
if(randomNumber===0){
    return "Rock";
}
else if(randomNumber===1){
    return "Paper";
}
else{
    return "Scissors";
}
}
