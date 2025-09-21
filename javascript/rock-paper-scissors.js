  let playerScore = 0;
    let computerScore = 0;

    function playGame(playerChoice) {
      const choices = ["Rock", "Paper", "Scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      let result = "";

      if (playerChoice === computerChoice) {
        result = `It's a draw! Both chose ${playerChoice}`;
      } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        result = `🎉 You win! ${playerChoice} beats ${computerChoice}`;
        playerScore++;
      } else {
        result = `😢 You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
      }

      document.getElementById("result").innerText = result;
      document.getElementById("score").innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
    }