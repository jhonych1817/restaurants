import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBIY5BbAcuLYSbEYHrFu7IdtS_bGRw8lyw",
  authDomain: "restaurantsexpo-d62a6.firebaseapp.com",
  projectId: "restaurantsexpo-d62a6",
  storageBucket: "restaurantsexpo-d62a6.appspot.com",
  messagingSenderId: "701372369136",
  appId: "1:701372369136:web:a6251df8a1f05a1917da35"
  };

firebase.initializeApp(firebaseConfig);

export default firebase