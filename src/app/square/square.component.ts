import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ColorGen } from '../shared/ColorGen';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent implements OnInit {
  @Input() color: string;
  @Input() id: string = '';
  @Output() updateSquare: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.color = ColorGen();
  }

  changeColor() {
    this.color = ColorGen();
    this.updateSquare.emit(this.color);
  }

  ngOnInit(): void {
  }

}
