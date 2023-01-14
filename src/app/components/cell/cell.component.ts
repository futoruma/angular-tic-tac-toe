import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: []
})
export class CellComponent implements OnInit {
  @Input() cell: Number = 0;
  @Output() onClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onClickEvent.emit();
  }

}
