//gameboard represented as a 2D array
// Variables to keep track of player
//Event Listeners to detect when player clicks on square on gameboard
//functions to check for a win or draw
//game loop to handle flow of game

const GameBoard = (() => {//gamoeboard object
  const gameboard = [//gameboard array
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'O']
  ];

  const displayMarker = () => {
    const buttons = document.querySelectorAll('.marker-btn');
    buttons.forEach((button, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      button.textContent = gameboard[row][col];
    })
  }

  return {
    displayMarker
  };
})();

GameBoard.displayMarker();

const createPlayer = (name, marker) => {
  return {
    name,
    marker
  }
}

const player1 = createPlayer('player 1', 'X');
const player2 = createPlayer('player2', 'O');
