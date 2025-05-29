// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7MBAwoU1RcQ3TlJdl0sFiOgHObQXLsjU",
  authDomain: "rural-code-academy.firebaseapp.com",
  projectId: "rural-code-academy",
  storageBucket: "rural-code-academy.firebasestorage.app",
  messagingSenderId: "914229230554",
  appId: "1:914229230554:web:4830a54015ee430e9b1ee3",
  measurementId: "G-99PY1YKK4S"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default firebase;