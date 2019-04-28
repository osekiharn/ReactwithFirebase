import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBC-4KUM0VkZ0rcupbZdj_W9fes8nzMxy0',
  authDomain: 'diary-6bccb.firebaseapp.com',
  databaseURL: 'https://diary-6bccb.firebaseio.com',
  projectId: 'diary-6bccb',
  storageBucket: '',
  messagingSenderId: '512644157879',
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
