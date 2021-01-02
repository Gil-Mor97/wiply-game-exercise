import { SquareComponent } from './../square/square.component';
import { Component, OnInit } from '@angular/core';
import { ISquare } from '../square/square';
import { ColorGen } from '../shared/ColorGen';

@Component({
  selector: 'app-square-board',
  templateUrl: './square-board.component.html',
  styleUrls: ['./square-board.component.css'],
})
export class SquareBoardComponent implements OnInit {
  squaresColors: ISquare[] = [
    {
      color: ''
    },
    {
      color: ''
    },
    {
      color: ''
    },
    {
      color: ''
    },
    {
      color: ''
    },
    {
      color: ''
    },
    {
      color: ''
    },
    {
      color: ''
    },
    {
      color: ''
    }
  ];

  constructor() {
    let mySquare: ISquare;
    for (let square of this.squaresColors) {
      square.color = ColorGen()
    }
  }

  onSquareClicked(message: string, squareId: number): void {
    //this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit(): void {}
}
