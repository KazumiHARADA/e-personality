import firebase from 'firebase/app'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAPguddLTTWbDbmbiMk7nNqdc4Md5qEiic',
    authDomain: 'e-personality.firebaseapp.com',
    databaseURL: 'https://e-personality.firebaseio.com',
    projectId: 'e-personality',
    storageBucket: 'e-personality.appspot.com',
    messagingSenderId: '720498460983',
    appId: '1:720498460983:web:75ae3460bde8fbb8e532b2',
    measurementId: 'G-MDVHGZL75T'
  })
}

export default firebase
