import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorGenService {
  hexBase: string = '0123456789ABCDEF';

  constructor() { }

  public ColorGen(): string{
    let hexBase: string = '0123456789ABCDEF';

    let color = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
      color += hexBase[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
