/* create a variable to store a GuessHistory and random number*/

let guesses = [];
let corectNumber = getRandomNumber();

window.onload = function(){
    document.getElementById("number-submit").addEventListener("click",playGame);
    document.getElementById("restart-game").addEventListener("click",initGame);   
}

/* get user value from input and save it to variable
    ^^ playGame is a main function. ^^
*/

function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    dispalyResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

/* show the result for if the guesee is too high or too low*/

function dispalyResult(numberGuess){
    if(numberGuess > corectNumber)
    showNumberAbove();
    else if(numberGuess < corectNumber)
    showNumberBelow();
    else 
    showYouwon();;
}

function initGame(){
    corectNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
    document.getElementById("number-guess").value = "";
}

/* create a function to generate a random number*/

function getRandomNumber(){
    let number = Math.random();
    let randomNumber = Math.floor(number * 100) + 1;
    return randomNumber;
}

function saveGuessHistory(guess){
    guesses.push(guess);
}

function displayHistory(){
    let index = guesses.length-1;
    let list = "<ul class='list-group'>";
    while(index>=0){
        list+="<li class='list-group-item'>" + 
        "you guessed" +" " + guesses[index] + "</li>";
        index-=1;
    }
    list+='</ul>';
    document.getElementById("history").innerHTML=list;
}

function getDialog(dialogType,text){
    let dialog;
    switch (dialogType){
        case "warning":
        dialog = "<div class='alert' id='alert-warning' role='alert'>"
        break;
        case "won":
        dialog = "<div class='alert' id='alert-success' role='alert'>"
        break;
    }
    dialog +=text;
    dialog +="</div>"
    return dialog;
}

function showYouwon(){
    const text = "<span style ='color:#0f5a0b'>Awesome job, you got it!</span>";
    let dialog = getDialog("won",text);
    document.getElementById("result").innerHTML = dialog;
}
function showNumberAbove(){
    const text = "<span style ='color:#b47b7b'> Your guess is too <b>high!</b></span>";
    let dialog=getDialog("warning",text);
    document.getElementById("result").innerHTML = dialog;
}
function showNumberBelow(){
    const text = "<span style ='color:#b47b7b'>Your guess is too <b>low!</b></span>";
    let dialog=getDialog("warning",text);
    document.getElementById("result").innerHTML = dialog;
}


    