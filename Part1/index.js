//reassign the value of player from 'X' to 'O' when the board is clicked.

const board = Array(9).fill(null);

const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = () => {
    for (const line of lines) {
        const [a, b, c] = line;
        console.log('board[a]', board[a])
        console.log('board[b]', board[b])
        console.log('board[c]', board[c])
        
        // If the first square is filled, and it matches the value of the second and third square,
        // then we have a winner.
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
          }
      }
}


const play = (boxId) => {
    const playerSpan = document.querySelector('#player')
    playerSpan.innerText = playerSpan.innerText === 'X' ? 'O' : 'X';

    const clickedBox = document.getElementById(boxId);

    clickedBox.innerText = playerSpan.innerText;
    board[boxId] = playerSpan.innerText;
    console.log('board', board)

    const winner = calculateWinner();
  if (winner) {
    alert(`${winner} is the winner!`);

  }
}








