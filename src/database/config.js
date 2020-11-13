import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyACYh7QbCz-gqpaQavLJ-XciEkfRv53k-g",
  authDomain: "photowall-19a7f.firebaseapp.com",
  databaseURL: "https://photowall-19a7f.firebaseio.com",
  projectId: "photowall-19a7f",
  storageBucket: "photowall-19a7f.appspot.com",
  messagingSenderId: "669463482358",
  appId: "1:669463482358:web:f6104a2e9f2d54a00c81d7"
};

firebase.initializeApp(config);
const database = firebase.database();
export { database };