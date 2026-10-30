console.log("Hello World")





function getComputerChoice() {

    const numero = Math.random(); 

    if (numero < 0.33) {
        return "rock";
    } else if (numero < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice () {
    const escolha = prompt("Escolha rock, paper, scissors");
    return escolha;      
}



function playGame(){
  
  let humanScore = 0;
  let computerScore = 0;
 

  
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(playRound(getHumanChoice(), getComputerChoice()));

console.log("Pontuação humana:", humanScore);
console.log("Pontuação do computador:", computerScore);
    if (humanScore > computerScore){
        return"human winner";
    } else if (humanScore === computerScore){
        return"empate";
    } else {
        return"computer winner";
    }
  
  

function playRound(humanSelection, computerSelection) {
    
    humanSelection = humanSelection.toLowerCase();

    if (humanSelection === "rock" && computerSelection === "rock") {
        return "empate";
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return"computer winner";
    } else if (humanSelection === "rock" && computerSelection === "scissors"){
        humanScore++;
        return"human winner";
    } else if (humanSelection === "paper" && computerSelection === "paper"){
        return"empate";
    } else if (humanSelection === "paper" && computerSelection === "rock"){
        humanScore++;
        return"human winner";
    }else if (humanSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return"computer winner";
    } else if(humanSelection === "scissors" && computerSelection === "scissors"){
        return"empate";
    } else if (humanSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return"computer winner";
    }else{
        humanScore++;
        return"human winner";
    }
}



}

playGame();


