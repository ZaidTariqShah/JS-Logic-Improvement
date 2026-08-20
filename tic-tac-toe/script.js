let boardElement = document.querySelector("#board");
let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let para = document.querySelector("#para");
let isGameOver = false;
let reset = document.querySelector("#reset");

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

let buttons = boardElement.querySelectorAll("button");
let arrayofButtons = Array.from(buttons);
arrayofButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (isGameOver) return;
    let clickedIndex = arrayofButtons.indexOf(e.target);
    if (board[clickedIndex] !== "") return; //click extra
    arrayofButtons[clickedIndex].innerText = player;
    board[clickedIndex] = player; //internal
    checkWinner();
    if (isGameOver) return;
    checkBoardFull();
    if (isGameOver) return;
    switchPlayer();
  });
});

function checkWinner() {
  winningCombinations.forEach((combination) => {
    if (
      board[combination[0]] === player &&
      board[combination[1]] === player &&
      board[combination[2]] === player
    ) {
      para.innerText = `${player} WINS`;
      isGameOver = true;
    }
  });
}

function switchPlayer() {
  if (isGameOver) return;
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function checkBoardFull() {
  let checkSpace = board.every((space) => {
    return space !== "";
  });
  if (checkSpace) {
    para.innerText = "Game Draw";
    isGameOver = true;
  }
}

reset.addEventListener("click", function () {
  arrayofButtons.forEach((button) => {
    button.innerText = "";
  });
  isGameOver = false;
  player = "X";
  para.innerText = "";
  board.fill("");
});
