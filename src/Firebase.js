// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth";
import  {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt9saO8C1czM6zfy67HfiO2cdnXhWvg7g",
  authDomain: "capstone-project-6fee7.firebaseapp.com",
  projectId: "capstone-project-6fee7",
  storageBucket: "capstone-project-6fee7.appspot.com",
  messagingSenderId: "1012808616218",
  appId: "1:1012808616218:web:671c7ce46042c8988f44a3",
  measurementId: "G-5B7168H46P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const auth = getAuth(app);