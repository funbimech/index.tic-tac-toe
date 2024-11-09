const cmpbtn = document.getElementById("cmpbtn");
const container1 = document.querySelector(".container1");
const main = document.querySelector(".main");
const container2 = document.querySelector(".container2");
const playwins = document.querySelector(".playwins");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cells");
const boxs = document.querySelectorAll(".boxs");
const results = document.querySelector(".results");
const gameboard = document.querySelector(".gameboard");
const playresults = document.querySelector(".playresults");
const cmpresults = document.querySelector(".cmpresults");
const display = document.querySelector(".display");
const quitbtn = document.getElementById("quitbtn");
const restartbtn = document.getElementById("restartbtn");
const wincondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let winners = "X" || "O";
let win = 0;
let draws = 0;
let cmpwins = 0;
let computerturn;
let currentplayer = "x";
let options = ["", "", "", "", "", "", "", "", ""];
let playermovelimit = 5;
let computermovelimit = 4;
let playermove = 0;
let computermove = 0;
let gameover = false;

cmpbtn.addEventListener("click", () => {
  container1.style.display = "none";
  container2.style.display = "flex";
});

quitbtn.addEventListener("click", () => {
  container1.style.display = "flex";
  container2.style.display = "none";
  display.style.display = "none";
  options = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cells) => (cells.textContent = ""));
  playermove = 0;
  computermove = 0;
  if (!game()) {
    win = 0;
    playresults.textContent = win;
  }
  cmpresults.textContent = win;
  restartgame();
});
restartbtn.addEventListener("click", restartgame);

function game() {
  cells.forEach((cells, index) => {
    cells.addEventListener("click", () => {
      if (gameover) return;
      if (cells.textContent.trim() != "") return;
      handleplayermove(index);
    });
  });
}

function handleplayermove(cellindex) {
  if (playermove >= playermovelimit || gameover) return;
  if (gameover || options[cellindex] !== "") return;
  options[cellindex] = "x";
  cells[cellindex].textContent = "x";
  playermove++;
  computerplay();
  checkwinner();
}

function computerplay() {
  if (computermove >= computermovelimit || gameover) return;
  let availablecell = []; // an array to store index of empty cell
  for (i = 0; i < options.length; i++) {
    // iterates over my empty cells array ie option
    if (options[i] === "") availablecell.push(i); // checks if currentcell is empty and adds it index to availablecell   }
  }
  const randomindex = Math.floor(Math.random() * availablecell.length); // generate a random index within availablecell
  const cellindex = availablecell[randomindex]; //select index of an available cell
  computermove++;
  options[cellindex] = "o";
  cells[cellindex] = "o";
  cells[cellindex].textContent = "o";
}
function checkwinner() {
  for (const condition of wincondition) {
    if (
      options[condition[0]] === "x" &&
      options[condition[1]] === "x" &&
      options[condition[2]] === "x"
    ) {
      winners = "X";
      showmessage();
      win++;
      playresults.textContent = win;
      playermove++;
      gameover = true;
      break;
    }
    if (
      options[condition[0]] === "o" &&
      options[condition[1]] === "o" &&
      options[condition[2]] === "o"
    ) {
      winners = "O";
      showmessage();
      cmpwins++;
      cmpresults.textContent = cmpwins;
      computermove++;
      gameover = true;
      break;
    }
    if (
      !options.includes("") &&
      !(
        options[condition[0]] === "o" &&
        options[condition[1]] === "o" &&
        options[condition[2]] === "o"
      ) &&
      !(
        options[condition[0]] === "x" &&
        options[condition[1]] === "x" &&
        options[condition[2]] === "x"
      )
    ) {
      winners = "";
      showmessage();
      draws++;
      results.textContent = draws;
      gameover = false;
      break;
    }
  }
}

function showmessage() {
  gameover = false;
  display.style.display = "flex";
  if (winners === "X") {
    playwins.textContent = "player1 wins";
    message.textContent = winners + "TAKES THE ROUND";
  } else if (winners === "O") {
    playwins.textContent = "player2 wins";
    message.textContent = winners + "TAKES THE ROUND";
  } else {
    playwins.textContent = "IT'S A TIE";
    message.textContent = "";
  }
}
function restartgame() {
  gameover = false;
  display.style.display = "none";
  options = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cells) => (cells.textContent = ""));
  playermove = 0;
  computermove = 0;
}
function clear() {}
game();

document.addEventListener("DOMContentLoaded", () => {
  const playbtn = document.getElementById("playbtn");
  const container3 = document.querySelector(".container3");
  playbtn.addEventListener("click", () => {
    container1.style.display = "none";
    container3.style.display = "flex";
  });
  const cell = document.querySelectorAll(".cell");
  const playresult = document.querySelector(".playresult");
  const cmpresult = document.querySelector(".cmpresult");
  const result = document.querySelector(".result");
  const displays = document.querySelector(".displays");
  const quitbutton = document.getElementById("quitbutton");
  const restartbutton = document.getElementById("restartbutton");
  const playwin = document.querySelector(".playwin");
  const messages = document.querySelector(".messages");
  let winner = "X" || "O";
  let won = 0;
  let cmpwin = 0;
  let draw = 0;
  let option = ["", "", "", "", "", "", "", "", ""];
  let player1 = "x";
  let player2 = "o";
  let player1movelimit = 5;
  let player2movelimit = 4;
  let player1move = 0;
  let player2move = 0;
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let currentplayers = "x";
  let gameovers = false;

  quitbutton.addEventListener("click", () => {
    container1.style.display = "flex";
    container3.style.display = "none";
    displays.style.display = "none";
    option = ["", "", "", "", "", "", "", "", ""];
    cell.forEach((cell) => (cell.textContent = ""));

    if (!render()) {
      won = 0;
      playresult.textContent = won;
    }
    {
      cmpwin = 0;
      cmpresult.textContent = cmpwin;
    }
    {
      draw = 0;
      result.textContent = draw;
    }
    restartgames();
  });
  // render();

  restartbutton.addEventListener("click", restartgames);

  function render() {
    cell.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (gameovers) return;
        changeplayer(index);
      });
    });
  }
  function changeplayer(cellindex) {
    if (
      player1move >= player1movelimit ||
      player2move >= player2movelimit ||
      gameovers
    )
      return;
    if (gameovers || option[cellindex] !== "") return;
    if (cell[cellindex].textContent.trim() != "") return;
    option[cellindex] = currentplayers;
    cell[cellindex].textContent = currentplayers;
    if (currentplayers === player1) {
      currentplayers = player2;
    } else [(currentplayers = player1)];
    {
      console.log(currentplayers);
    }
    check();
    player1move = 0;
    player2move = 0;
  }
  function check() {
    for (const condition of wins) {
      if (
        option[condition[0]] === player1 &&
        option[condition[1]] === player1 &&
        option[condition[2]] === player1
      ) {
        winner = "X";
        showmessages();
        won++;
        playresult.textContent = won;
        currentplayers = "x";
        gameovers = true;
        break;
      } else if (
        option[condition[0]] === player2 &&
        option[condition[1]] === player2 &&
        option[condition[2]] === player2
      ) {
        winner = "O";
        showmessages();
        cmpwin++;
        cmpresult.textContent = cmpwin;
        currentplayers = "x";
        gameovers = true;
        break;
      }
    }
    if (!option.includes("")) {
      winner = "";
      showmessages();
      draw++;
      result.textContent = draw;
      currentplayers = "x";
      gameovers = true;
    }
  }
  function showmessages() {
    gameovers = false;
    displays.style.display = "flex";
    if (winner === "X") {
      playwin.textContent = "player1 wins";
      messages.textContent = winner + "TAKES THE ROUND";
    } else if (winner === "O") {
      playwin.textContent = "player2 wins";
      messages.textContent = winner + "TAKES THE ROUND";
    } else {
      playwin.textContent = "IT'S A TIE";
      messages.textContent = "";
    }
  }
  function restartgames() {
    gameovers = false;
    displays.style.display = "none";
    option = ["", "", "", "", "", "", "", "", ""];
    cell.forEach((cell) => (cell.textContent = ""));
    player1move = 0;
    player2move = 0;
  }
  render();
});
