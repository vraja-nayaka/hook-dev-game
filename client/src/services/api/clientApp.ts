import { initializeApp, getApps } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyBhZkbK-8RHEb3Ovz6VywQBAnlTYQtx7kE",
  authDomain: "hook-dev-game.firebaseapp.com",
  projectId: "hook-dev-game",
  storageBucket: "hook-dev-game.appspot.com",
  messagingSenderId: "131152715229",
  appId: "1:131152715229:web:46e2e42a6e9c8d45702a34",
  measurementId: "G-RLWX87TQT8"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
