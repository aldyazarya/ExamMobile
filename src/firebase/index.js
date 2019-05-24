import firebase from 'firebase'
  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAdFaj4Wx75nW26KT4FXEPI6x9-78cfmk4",
    authDomain: "exammobile-fd0d3.firebaseapp.com",
    databaseURL: "https://exammobile-fd0d3.firebaseio.com",
    projectId: "exammobile-fd0d3",
    storageBucket: "exammobile-fd0d3.appspot.com",
    messagingSenderId: "377199224595",
    appId: "1:377199224595:web:d30cf8e9e5654daf"
  };
// Initialize Firebase
export const Fire = firebase.initializeApp(firebaseConfig);
