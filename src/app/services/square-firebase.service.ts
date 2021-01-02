import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISquare } from '../square/square';

@Injectable({
  providedIn: 'root',
})
export class SquareFirebaseService {

  squareCollectionRef: AngularFirestoreCollection<ISquare>;
  squaresColors$: Observable<ISquare[]>;

  constructor(private db: AngularFirestore) {
    this.squareCollectionRef = db.collection<ISquare>('squares'); //initiate the fs ref for the collection
    this.squaresColors$ = this.squareCollectionRef.snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as ISquare; // create a square object
            data.id  = a.payload.doc.id; // update the square id
            return data; // map the data to the ISquare observable array
          })
        )
      );
  }

  //return the squares collection
  getSquares(): Observable<ISquare[]> {
    return this.squaresColors$;
  }

  updateSquareDB(square: ISquare): void {
    //update the color of the relevant square on our firestore collection
    this.squareCollectionRef.doc(square.id).update(square);
  }

}
