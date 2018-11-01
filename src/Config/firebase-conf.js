import * as firebase from "firebase";



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCIsfbEZVWjly_lbiMVz-5d6ecXRJt2BvM",
    authDomain: "react-fb-17899.firebaseapp.com",
    databaseURL: "https://react-fb-17899.firebaseio.com",
    projectId: "react-fb-17899",
    storageBucket: "react-fb-17899.appspot.com",
    messagingSenderId: "638031619949"
  };
  firebase.initializeApp(config);

  export default firebase;