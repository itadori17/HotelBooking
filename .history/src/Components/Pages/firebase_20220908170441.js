import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAe4tThGqGL_q8ibnSXlc8Vlg9sDf9W658",
    authDomain: "booking-app-80180.firebaseapp.com",
    projectId: "booking-app-80180",
    storageBucket: "booking-app-80180.appspot.com",
    messagingSenderId: "353476429267",
    appId: "1:353476429267:web:a7e54feebbc6c2ae1d5b26"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app)
  const analytics = getAnalytics(app);
  
  export {auth, db};