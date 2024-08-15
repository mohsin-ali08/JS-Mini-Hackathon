// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";


import { getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";



// firestore adding 
import { getFirestore,
  doc,
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";





const firebaseConfig = {
  apiKey: "AIzaSyBmYyPBa7l4fdq9p2cRNF0WiPmGSH58-nU",
  authDomain: "user-authentication-login-form.firebaseapp.com",
  projectId: "user-authentication-login-form",
  storageBucket: "user-authentication-login-form.appspot.com",
  messagingSenderId: "815135872930",
  appId: "1:815135872930:web:3948589ba9247c866544fb",
  measurementId: "G-WR6VBES107"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db=getFirestore(app)

// console.log(db);

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  db,
 doc, 
 setDoc 
};

