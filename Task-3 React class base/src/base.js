// import Rebase from "re-base";
// import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyDXUCNSpi5u07F76httlCTXAA4mPVQlEHs",
//   authDomain: "catch-of-the-day-wes-bos-2.firebaseapp.com",
//   databaseURL: "https://catch-of-the-day-wes-bos-2.firebaseio.com"
// });

// const base = Rebase.createClass(firebaseApp.database());

// // This is a named export
// export { firebaseApp };

// // this is a default export
// export default base;

import  Rebase  from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtkaBEJ0HFOZYJidl9UOMy-3m3lUIn2z0",
  authDomain: "test-4dc90.firebaseapp.com",
  databaseURL: "https://test-4dc90-default-rtdb.firebaseio.com",
  // projectId: "test-4dc90",
  // storageBucket: "test-4dc90.appspot.com",
  // messagingSenderId: "436844355277",
  // appId: "1:436844355277:web:88136c9fae3d4328df9384",
  // measurementId: "G-MGK08VEQJ6"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp}

export default base;
