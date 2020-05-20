import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOdp0um6pdHkFNlZNUaadcilB9m3ienQg",
  authDomain: "todo-app-a87f3.firebaseapp.com",
  databaseURL: "https://todo-app-a87f3.firebaseio.com",
  projectId: "todo-app-a87f3",
  storageBucket: "todo-app-a87f3.appspot.com",
  messagingSenderId: "782271180093",
  appId: "1:782271180093:web:5db40a94efd2e900b52954"
});

const db = firebaseApp.firestore();

export default db;