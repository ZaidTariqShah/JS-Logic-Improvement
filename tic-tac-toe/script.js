let boardElement = document.querySelector("#board");
let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let para = document.querySelector("#para");
let isGameOver = false;
let reset = document.querySelector("#reset");
let computerTimer;
let computersThinking = false;

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
    if (computersThinking) return;
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
    let computersIndex = computerMove();
    computerTimer = setTimeout(() => {
      board[computersIndex] = player;
      arrayofButtons[computersIndex].innerText = player;
      checkWinner();
      if (isGameOver) return;
      switchPlayer();
      checkBoardFull();
      computersThinking = false;
    }, 1000);
  });
});

function checkWinner() {
  for (let combination of winningCombinations) {
    if (
      board[combination[0]] === player &&
      board[combination[1]] === player &&
      board[combination[2]] === player
    ) {
      para.innerHTML = `${player} Wins`;
      isGameOver = true;
      break;
    }
  }
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
  clearTimeout(computerTimer); // returns id and clears Time out from that ID
  computersThinking = false;
  arrayofButtons.forEach((button) => {
    button.innerText = "";
  });
  isGameOver = false;
  player = "X";
  para.innerText = "";
  board.fill("");
});

let emptySpaces = [];
function computerMove() {
  computersThinking = true;
  emptySpaces = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      emptySpaces.push(i);
    }
  }
  let computersIndex =
    emptySpaces[Math.floor(Math.random() * emptySpaces.length)];
  // board[computersIndex] = player;
  return computersIndex;
}
