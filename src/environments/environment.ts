// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { firebase } from '@firebase/app';
import '@firebase/firestore'
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyACf0LBK_ng5ixc5SNRmiOl2uRrJje_cQ8",
    authDomain: "restaurant-d0ecd.firebaseapp.com",
    databaseURL: "https://restaurant-d0ecd-default-rtdb.firebaseio.com",
    projectId: "restaurant-d0ecd",
    storageBucket: "restaurant-d0ecd.appspot.com",
    messagingSenderId: "1030303441762",
    appId: "1:1030303441762:web:32e336e6ae9d1adc32423b"
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
