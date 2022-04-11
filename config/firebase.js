import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcdVXTKxUknQWmqXL3HdJrUW5s_ZXY6gE",
  authDomain: "hotels-f6e15.firebaseapp.com",
  projectId: "hotels-f6e15",
  storageBucket: "hotels-f6e15.appspot.com",
  messagingSenderId: "570914887965",
  appId: "1:570914887965:web:2353f9da3f7971d18729f4"
};


const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(app)
export const auth = firebase.auth()
export { firebase }