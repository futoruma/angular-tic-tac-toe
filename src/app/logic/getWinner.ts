export function getWinner(
  board: Array<number>,
  curPlayer: number
): Array<number> {
  //curPlayer: 0 - 'X', 1 - 'O', 2 - none

  const winningPatterns: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // check if the current player has won by making the current move
  for (let i = 0; i < 8; i++) {
    let [a, b, c] = winningPatterns[i];
    if (
      board[a] === curPlayer &&
      board[b] === curPlayer &&
      board[c] === curPlayer
    ) {
      // if yes, return the current player's mark and the winning indexes of the board
      return [curPlayer, a, b, c];
    }
  }

  // if there is no winner
  return [2, 9, 9, 9];
}
