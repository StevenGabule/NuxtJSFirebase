import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyA3o5D-gi0VuISDIVlcUTwfa3JRktRQaxA",
    authDomain: "nuxt-news-feed-51c4f.firebaseapp.com",
    databaseURL: "https://nuxt-news-feed-51c4f.firebaseio.com",
    projectId: "nuxt-news-feed-51c4f",
    storageBucket: "nuxt-news-feed-51c4f.appspot.com",
    messagingSenderId: "720125473742",
    appId: "1:720125473742:web:555ba3d710bce1eeafb19f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
export default db;

