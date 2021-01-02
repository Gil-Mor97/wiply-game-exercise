import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() color: string = '';
  @Input() id: string = '';
  @Output() updateSquare: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  //handler for color change
  changeColor() {
    this.updateSquare.emit(); //emit the update
  }

  ngOnInit(): void {}
}
