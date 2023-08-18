const buttons = document.querySelectorAll('.marker-btn');
const btnRestart = document.querySelector('.restart-game');
const statusTxt=document.querySelector('#status');
let running = false;

const createPlayer = (name, marker) => {
  return {
    name,
    marker
  }
}

const player1 = createPlayer('player 1', 'X');
const player2 = createPlayer('player2', 'O');
let currentPlayer = player1;

const GameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const init = () => {
    buttons.forEach((button) => button.addEventListener('click', () => buttonClick(button)));
    btnRestart.addEventListener('click', restartGame);
    statusTxt.textContent=`${currentPlayer.name} Your Turn`;
    running = true;
  }

  const buttonClick = (button) => {
    const index = parseInt(button.dataset.index);
    if(gameboard[index]!="" || !running){
      return;
    }
    updateButton(button, index);
    checkWinner();
  }

  const updateButton = (button, index) => {
    gameboard[index] = currentPlayer.marker;
    button.innerHTML = currentPlayer.marker;
  }

  const changePlayer = () => {
    currentPlayer = (currentPlayer == player1) ? player2 : player1;
    statusTxt.textContent=`${currentPlayer.name} Your Turn`;
  }

  const checkWinner = () => {
    let isWon = false;
    for(let i=0; i<win.length; i++){
      const condition = win[i];
      const box1 = gameboard[condition[0]];
      const box2 = gameboard[condition[1]];
      const box3 = gameboard[condition[2]];
      if(box1 == "" || box2 == "" || box3 == ""){
        continue;
      }
      if(box1 == box2 && box2 == box3) {
        isWon = true;
        buttons[condition[0]].classList.add('win');
        buttons[condition[1]].classList.add('win');
        buttons[condition[2]].classList.add('win');
      }
    }

    if(isWon) {
      statusTxt.textContent=`${currentPlayer.name} Won..`;
      running = false;
    }else if(!gameboard.flat().some(cell => cell === "")){
      statusTxt.textContent=`Game Draw..!`;
      running = false;
    }else {
      changePlayer();
    }
  }

  const restartGame = () => {
    gameboard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = player1;
    running = true;
    statusTxt.textContent = `${currentPlayer.name} Your turn`;

    buttons.forEach(button => {
      button.innerHTML = "";
      button.classList.remove('win');
    });
  }

  return {
    init,
  };
})();

GameBoard.init();
  // const displayMarker = () => {
  //   buttons.forEach((button, index) => {
  //     const row = Math.floor(index / 3);
  //     const col = index % 3;
  //     button.textContent = gameboard[row][col];
  //   })
  // }

  //gameboard represented as a 2D array
// Variables to keep track of player
//Event Listeners to detect when player clicks on square on gameboard
//functions to check for a win or draw
//game loop to handle flow of game

 // const addMarker = (button, player) => {
  //   const index = parseInt(button.dataset.index);
  //   const row = Math.floor(index / 3);
  //   const col = index % 3;

  //   if(gameboard[row][col] === ''){
  //     gameboard[row][col] = player.marker;
  //     button.textContent = player.marker;
  //     displayMarker();
  //   }
  // }