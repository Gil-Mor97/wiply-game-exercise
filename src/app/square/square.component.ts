import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ColorGen } from '../shared/ColorGen';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent implements OnInit {
  @Input() color: string = '';
  @Input() id: string = '';
  @Output() updateSquare: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    //initiate a square with random color
    //this.color = ColorGen();
  }

  //handler for color change
  changeColor() {
    // this.color = ColorGen();
    // this.updateSquare.emit(this.color); //emit the update
    this.updateSquare.emit(); //emit the update
  }

  ngOnInit(): void {
  }

}
