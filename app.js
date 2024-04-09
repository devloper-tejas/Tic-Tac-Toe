 let clickers = document.querySelectorAll(".clicker");
 let reset = document.querySelector(".reset");
 let newGame = document.querySelector(".newgame");
 let winCont = document.querySelector(".Win");
 let winMsg = document.querySelector(".Winner-txt");

 let turnX = true;


   const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
 ];

 const resetGame = () => {
    turnX = true;
    enableGame();
    winCont.classList.add("hide");
    clickers.innerText = "";
 }

 clickers.forEach((clicker) => {
  clicker.addEventListener("click", () => {
    if (turnX) {
      clicker.innerText = "X";
      turnX = false;
    } else {
      clicker.innerText = "O";
      turnX = true;
    }
    clicker.disabled = true;

    checkWinner();
  });
  });

 const disableGame = () => {
  for (let clicks of clickers) {
    clicks.disabled = true;
  }
 };

 const enableGame = () => {
    for (let clicks of clickers) {
      clicks.disabled = false;
      clicks.innerText = "";
    }
   };

 const showWinner = (winner) => {
  winMsg.innerText = `Congratulations the winner is ${winner}`;
  winCont.classList.remove("hide");
  disableGame();
  };

 const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1Val = clickers[patterns[0]].innerText;
    let pos2Val = clickers[patterns[1]].innerText;
    let pos3Val = clickers[patterns[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
 };

 newGame.addEventListener("click", resetGame);
 reset.addEventListener("click", resetGame);