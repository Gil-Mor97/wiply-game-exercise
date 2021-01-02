import { Component, Input, OnInit } from '@angular/core';
import { ColorGen } from '../shared/ColorGen';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent implements OnInit {
  @Input() color: string;
  @Input() id: string = '';

  constructor() {
    this.color = ColorGen();
  }

  changeColor() {
    this.color = ColorGen();
  }

  ngOnInit(): void {
  }

}
