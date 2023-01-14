import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onCellClick(index: number) {
    if (this.board[index] < 2) {
      return;
    }
    this.board[index] = this.curPlayer;
    this.curPlayer ^= 1;
    this.curMove++;
  }
}
