import { Component, OnInit } from '@angular/core';
import { ISquare } from '../square/square';
import { ColorGenService } from '../services/color-gen.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SquareFirebaseService } from '../services/square-firebase.service';

@Component({
  selector: 'app-square-board',
  templateUrl: './square-board.component.html',
  styleUrls: ['./square-board.component.css'],
})
export class SquareBoardComponent implements OnInit {
  colorGen: ColorGenService = new ColorGenService(); //create a new instance of the color gen service

  constructor(private firebaseService: SquareFirebaseService) {}

  get squaresColors$(): Observable<ISquare[]> {
    return this.firebaseService.getSquares();
  }

  //update the
  updateSquareDB(square: ISquare) {
    square.color = this.colorGen.ColorGen(); //generate a new color and updates the square
    //call the firebase service method to update the square within the collection
    this.firebaseService.updateSquareDB(square); //
  }

  //return the square id for the trackBy method, so the squares will be trackable and transitionable.
  trackId(index: number, square: ISquare): string {
    return square.id;
  }

  ngOnInit(): void {}
}
