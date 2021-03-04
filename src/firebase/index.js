import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBt1jPzo_nltOK2IWYaSlo4-rPRQfsbGjI",
    authDomain: "coderhouse-ecommerce-react.firebaseapp.com",
    projectId: "coderhouse-ecommerce-react",
    storageBucket: "coderhouse-ecommerce-react.appspot.com",
    messagingSenderId: "508934852041",
    appId: "1:508934852041:web:05ccfd6ff503b4d5a76c18"
  };

  const app = firebase.initializeApp(firebaseConfig);


export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}