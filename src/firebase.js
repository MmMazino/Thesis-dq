import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzRKDtN0LZcJ8lG-AgBUc8W-BCqqsxFnU",
  authDomain: "iqdeq-finalproject.firebaseapp.com",
  projectId: "iqdeq-finalproject",
  storageBucket: "iqdeq-finalproject.appspot.com",
  messagingSenderId: "841548105143",
  appId: "1:841548105143:web:7bd10a69b02d1ff6e15432",
  measurementId: "G-FFPRFQD4LJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
