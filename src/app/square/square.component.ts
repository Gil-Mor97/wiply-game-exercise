import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  color: string;
  hexBase: string = '0123456789ABCDEF';

  constructor() {
    this.color = this.getRandomColor();
  }

  getRandomColor(): string {
    this.color = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
      this.color += this.hexBase[Math.floor(Math.random() * 16)];
    }
    return this.color;
  }

  ngOnInit(): void {
  }

}
