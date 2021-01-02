// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBQG-BsRgdGwDtVQCty-RjiQ1x3Vwn4rSY",
    authDomain: "wiply-game-exercise.firebaseapp.com",
    databaseURL: "https://wiply-game-exercise-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wiply-game-exercise",
    storageBucket: "wiply-game-exercise.appspot.com",
    messagingSenderId: "844488256723",
    appId: "1:844488256723:web:49ee2aaf8aff02231db826",
    measurementId: "G-QV78G5EN6S"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
