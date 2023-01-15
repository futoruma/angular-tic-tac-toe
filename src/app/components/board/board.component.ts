import { Component, OnInit } from '@angular/core';
import { getWinner } from 'src/app/logic/getWinner';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: [],
})
export class BoardComponent implements OnInit {
  board: Array<number> = [2, 2, 2, 2, 2, 2, 2, 2, 2]; // 0 - 'X', 1 - 'O', 2 - blank
  curPlayer: number = 0; // 0 - 'X', 1 - 'O'
  curMove: number = 0;
  gameStatus: number = 3; // 0 - 'X' won, 1 - 'O' won, 2 - tie, 3 - in progress
  winningCombination: Array<number> = [9, 9, 9]; // index 9 doesn't exist, which means there is no winning combination yet

  constructor() {}

  ngOnInit(): void {}

  onCellClick(index: number) {
    // if the cell has already been marked or the game is over
    if (this.board[index] < 2 || this.gameStatus < 3) {
      return;
    }

    // else if game is still in progress - fill the cell with the current player's mark
    this.board[index] = this.curPlayer;

    // check if the current player has won by making the current move
    let [winner, a, b, c] = getWinner(this.board, this.curPlayer);
    if (winner < 2) {
      this.gameStatus = winner;
      this.winningCombination = [a, b, c];
      return;
    }

    this.curMove++;
    // if it was the last possible move and there is no winner - the game ends with a tie
    if (this.curMove === 9) {
      this.gameStatus = 2;
      return;
    }

    // switch players if the game is still in progress
    this.curPlayer ^= 1;
  }

  startNewGame() {
    this.board = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    this.curPlayer = 0;
    this.curMove = 0;
    this.gameStatus = 3;
    this.winningCombination = [9, 9, 9];
  }
}
