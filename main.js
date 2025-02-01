const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout, //ini untuk readline agar bisa berinteraksi dengan user di terminal
});

function rockPapperScissors() {
  // function of this game
  const choice = ["rock", "papper", "scissors"];
  const computerChoice = choice[~~(Math.random() * choice.length)]; // untuk mengacak pilihan pada aray choice

  readline.question(
    "choose your choice (rock, papper, scissors):", // pertanyaan yg akan di ajukan di terminal
    (playerChoice) => {
      playerChoice = playerChoice.toLowerCase();
      if (!choice.includes(playerChoice)) {
        console.log("your choice is invalid motherfucker!!!");
        rockPapperScissors(); //for play the game again
        return;
      }
      console.log(`your choice: ${playerChoice}`);
      console.log(`computer choice: ${computerChoice}`);

      if (playerChoice == computerChoice) {
        console.log("oh fuck you tie!"); // jika seri akan menghasilkan output ini
      } else if (
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "papper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "papper") // logic untuk user jika menang
      ) {
        console.log("you win son of a bitch!");
      } else {
        // jika kondisi tidak sesuai dengan kondisi if di atas akan menghasilkan nilai false
        console.log("you lose, poor!"); //output saat kalah
      }

      readline.question(
        "do you want to play again nigga?(yes/no):",
        (answer) => {
          if (answer.toLowerCase() == "yes") {
            rockPapperScissors();
          } else {
            console.log("thanks for playing this game with us HAHAHAHA");
            readline.close();
          }
        }
      );
    }
  );
}
console.log("welcome to the rock, papper, SHOTGUN game you slave");
rockPapperScissors();
