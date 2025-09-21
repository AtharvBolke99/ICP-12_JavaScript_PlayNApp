    const board = document.getElementById("board");
    let currentPlayer = "X";
    let cells = [];

    function createBoard() {
      board.innerHTML = "";
      cells = [];
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => makeMove(cell), { once: true });
        board.appendChild(cell);
        cells.push(cell);
      }
    }

    function makeMove(cell) {
      cell.textContent = currentPlayer;
      cell.classList.add(currentPlayer.toLowerCase());
      if (checkWinner(currentPlayer)) {
        setTimeout(() => alert(`${currentPlayer} Wins!`), 200);
        return;
      }
      if (cells.every(c => c.textContent !== "")) {
        setTimeout(() => alert("Draw!"), 200);
        return;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWinner(player) {
      const wins = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // cols
        [0,4,8], [2,4,6]           // diagonals
      ];
      return wins.some(combo =>
        combo.every(index => cells[index].textContent === player)
      );
    }

    function restartGame() {
      currentPlayer = "X";
      createBoard();
    }

    createBoard();
