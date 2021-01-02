import { SquareComponent } from './../square/square.component';
import { Component, OnInit } from '@angular/core';
import { ISquare } from '../square/square';
import { ColorGen } from '../shared/ColorGen';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-square-board',
  templateUrl: './square-board.component.html',
  styleUrls: ['./square-board.component.css'],
})
export class SquareBoardComponent implements OnInit {
  squaresColors$: Observable<ISquare[]>;
  squaresColorsArr: ISquare[] = [];
  squareCollectionRef: AngularFirestoreCollection<ISquare>;

  constructor(private db: AngularFirestore) {
    //define our ref for the squares collection
    this.squareCollectionRef = db.collection<ISquare>('squares');

    //retreive and map the collection's data
    this.squaresColors$ = this.squareCollectionRef
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as ISquare; //create a square object
            const id = a.payload.doc.id; //update the square id
            data.id = id;
            return { ...data }; //map the data to the ISquare observable array
          })
        )
      );
  }

  //update the
  updateSquareDB(square: ISquare, color: string) {
    console.log(`retreived ${color}!`)

    //update the color of the relevant square on our firestore collection
    this.squareCollectionRef.doc(square.id).update({ color: color });
  }

  ngOnInit(): void {
    //subscribe to the observable and pass data to squares array
    this.squaresColors$.subscribe((data) => (this.squaresColorsArr = data));
  }
}
