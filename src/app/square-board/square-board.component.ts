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
    this.squareCollectionRef = db.collection<ISquare>('squares');

    this.squaresColors$ = db
      .collection<ISquare>('squares')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as ISquare;
            const id = a.payload.doc.id;
            data.id = id;
            return { ...data };
          })
        )
      );
    //this.squaresColors$.subscribe((data) => (this.squaresColorsArr = data));
    // let mySquare: ISquare;
    // for (let square of this.squaresColors) {
    //   square.color = ColorGen()
    // }

    // let collect = db.collection<ISquare[]>('squares').snapshotChanges().pipe(
    //   map(
    //     actions => actions.map(a => {
    //                 const data = a.payload.doc.data() as ISquare[];
    //                 const id = a.payload.doc.id;
    //                 return { id, ...data };
    //               })))
    // console.log(collect);

    // collect.forEach(docs => {
    //   this.squaresColors$ = docs;
    //   docs.forEach(doc =>{
    //     console.log(doc.color);
    //   })
    // });
  }

  onSquareClicked(message: string, squareId: number): void {
    //this.pageTitle = 'Product List: ' + message;
  }

  ngOnInit(): void {
    this.squaresColors$.subscribe((data) => (this.squaresColorsArr = data));
  }
}
