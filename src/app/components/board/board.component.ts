import { Component, OnInit } from '@angular/core';
import { getWinner } from 'src/app/logic/getWinner';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: [],
})
export class BoardComponent implements OnInit {
  board: Array<number> = [2, 2, 2, 2, 2, 2, 2, 2, 2];
  // 0 - 'X', 1 - 'O', 2 - empty
  curPlayer: number = 0;
  curMove: number = 0;
  gameStatus: number = 3;  // 0 - 'X' won, 1 - 'O' won, 2 - tie, 3 - in progress

  constructor() {}

  ngOnInit(): void {}

  onCellClick(index: number) {
    if (this.board[index] < 2 || this.gameStatus < 3) {
      return;
    }

    this.board[index] = this.curPlayer;

    let [winner, a, b, c] = getWinner(this.board, this.curPlayer);
    if (winner < 2) {
      this.gameStatus = winner;
      return;
    }

    this.curMove++;
    if (this.curMove === 9) {
      this.gameStatus = 2;
      return;
    }

    this.curPlayer ^= 1;
  }

  startNewGame() {
    this.board = [2, 2, 2, 2, 2, 2, 2, 2, 2];
    this.curPlayer = 0;
    this.curMove = 0;
    this.gameStatus = 3;
  }
  
}
