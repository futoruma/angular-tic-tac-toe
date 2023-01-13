import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: []
})
export class BoardComponent implements OnInit {
  board: Array<Number> = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // 0 - empty, 1 - marked by 'X', 2 - marked by 'O'

  constructor() { }

  ngOnInit(): void {
  }

}
