// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCREceNtiUCeQqq_zbCVdn6y5kD1eaPMfQ",
  authDomain: "my-50bee.firebaseapp.com",
  projectId: "my-50bee",
  storageBucket: "my-50bee.appspot.com",
  messagingSenderId: "694432396400",
  appId: "1:694432396400:web:e354ed45fe1834d58bb0b5",
  measurementId: "G-KZST33VDSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);