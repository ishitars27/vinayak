import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ Import Firebase Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyD5RU61frJVLnOpWJdgG7PZ2q7i42T9evo",
  authDomain: "cruising350.firebaseapp.com",
  databaseURL: "https://cruising350-default-rtdb.firebaseio.com", // ✅ Ensure this URL is correct
  projectId: "cruising350",
  storageBucket: "cruising350.appspot.com",
  messagingSenderId: "902380138662",
  appId: "1:902380138662:web:311f7298543adbaf50c467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // ✅ Initialize Realtime Database

export { auth, database }; // ✅ Export database properly
