let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = () => {
 const option = ["stone", "paper", "scissor"];
const randIdx = Math.floor(Math.random() *3);
return option[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw! 😒";
    msg.style.backgroundColor = "yellow";
} 


const showWinner = (userWin, choiceID, compChoice) => {
 if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You are Winner!");
    msg.innerText = `You are Winner! 😁  ${choiceID} beats Your ${compChoice}`;
    msg.style.backgroundColor = "green";
 }
 else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("LOOSER!");
    msg.innerText = `LOOSER!  😂 ${compChoice} beats Your ${choiceID}`;
    msg.style.backgroundColor = "red";
 }
}

const playGame = (choiceID) =>{
  console.log("User choice = ", choiceID);

  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (choiceID === compChoice) {
    drawGame();                          
  }
  else{
    let userWin = true;
    if (choiceID === "stone") {
        // Scissor , PAper
        userWin = compChoice === "paper" ? false : true;
    } else if(choiceID === "paper") {
        // stone, Scissor
        userWin = compChoice === "Scissor" ? false : true;
    } else {
         compChoice === "stone" ? false: true;
    }
     
    showWinner(userWin, choiceID, compChoice);
  }
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click", () =>{
        const choiceID = choice.getAttribute("id");
          
            playGame(choiceID);
    });
});