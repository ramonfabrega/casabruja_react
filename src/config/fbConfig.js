import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyDVfggUV8vh2rSztAv5t5sdkqxkkhgxzGM',
  authDomain: 'casa-bruja.firebaseapp.com',
  databaseURL: 'https://casa-bruja.firebaseio.com',
  projectId: 'casa-bruja',
  storageBucket: 'casa-bruja.appspot.com',
  messagingSenderId: '526394509186',
  appId: '1:526394509186:web:1bf36d859d2d6ead'
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
