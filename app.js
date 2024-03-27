let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector(".msg");

const userScorepar = document.querySelector("#user-score");
const compScorepar = document.querySelector("#comp-score");

const drawGmae = () => {
    msg.innerHTML="Game was Draw. Play again"
    msg.style.backgroundColor="#081b31"; 
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepar.innerHTML = userScore;
        msg.innerHTML=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepar.innerHTML=compScore;
        msg.innerHTML=`you lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";
    }
}

const genratecompChoice = () => {
    const options = ["rock","paper","ss"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice)
    //Genrate computers choice
    const compChoice = genratecompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGmae();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //ss,paper
            userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
             //rock , ss
            userWin = compChoice === "ss" ? false : true;
        }else{
            //rock , paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});