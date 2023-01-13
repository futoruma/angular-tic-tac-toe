import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: []
})
export class CellComponent implements OnInit {
  @Input() cell: Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
