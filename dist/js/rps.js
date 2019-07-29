let userScore = 0;
let aiScore = 0;
const userScore_span = document.getElementById('user-score');
const aiScore_span = document.getElementById('ai-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

// Random pick for the ai
function getAiChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

//Sets a string to an uppercase string
function upperCaseString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Gets user choice
function getUserChoice(userChoice){
    return document.getElementById(userChoice);
}

//Adds user score. Displays win and gives animated effect to user choice.
function win(user, ai){
    userScore++;

    userScore_span.innerHTML = userScore; 
    result_p.innerHTML = upperCaseString(user) + " beats " + 
        upperCaseString(ai) + ", You Win!";  

    getUserChoice(user).classList.add('green-glow');
    setTimeout(()=>getUserChoice(user).classList.remove('green-glow'),500);
}

//Custom messages at certain times. It depends on the ai score.
function aiMessage(user, ai, score){
    if(score === 5){
        result_p.innerHTML = upperCaseString(ai) + " beats " 
            + upperCaseString(user) + ", The AI Wins... that's nice"; 
    }else if(score === 10){
        result_p.innerHTML = upperCaseString(ai) + " beats " 
            + upperCaseString(user) + ", The AI Wins... it's learning";                      
    }else if(score === 17){
        result_p.innerHTML = upperCaseString(ai) + " beats " 
            + upperCaseString(user) + ", The AI Wins... Careful now";                      
    }else if(score === 25){
        result_p.innerHTML = upperCaseString(ai) + " beats " 
            + upperCaseString(user) + ", The AI Wins... @%#H%#E@L#@$P@^(#";                      
    }else if(score === 33){
        result_p.innerHTML = upperCaseString(ai) + " beats " 
            + upperCaseString(user) + ", I am you..... Human";                      
    }else{
        result_p.innerHTML = upperCaseString(ai) + " beats " 
            + upperCaseString(user) + ", The AI Wins... ";  
    }       
}

//Adds ai score. Displays win and gives animated effect to user choice.
function lose(user, ai){
    aiScore++;

    aiScore_span.innerHTML = aiScore;   

    aiMessage(user, ai, aiScore);

    getUserChoice(user).classList.add('red-glow');
    setTimeout(()=>getUserChoice(user).classList.remove('red-glow'),500);
}

//Condition for when user and ai both choose the same object.
function draw(user, ai){    
    result_p.innerHTML = "Both chose " + upperCaseString(user) + ", It's a Draw!"; 
    getUserChoice(user).classList.add('grey-glow');  
    setTimeout(()=>getUserChoice(user).classList.remove('grey-glow'),500);
}

//Handles what happens when two choices are weighed against one another.
function game(userChoice){
    const aiChoice = getAiChoice();

    switch(userChoice + aiChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice , aiChoice);
            break;
        case "paperscissors":
        case "rockpaper":
        case "scissorsrock":
            lose(userChoice , aiChoice);
            break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            draw(userChoice , aiChoice);
            break;         
    }
}

//Handles the click event. The user choice is then handled by the game function.
function main(){    
    rock_div.addEventListener('click', () => game('rock'));

    paper_div.addEventListener('click', () => game('paper'));

    scissors_div.addEventListener('click', () => game('scissors'));
}

main();

