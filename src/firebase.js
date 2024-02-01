import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQha3y7JOtMadxQeLVX1WaHGqhmkTXCFo",
  authDomain: "react-notes-d09ad.firebaseapp.com",
  projectId: "react-notes-d09ad",
  storageBucket: "react-notes-d09ad.appspot.com",
  messagingSenderId: "921992518156",
  appId: "1:921992518156:web:e11cd1eb3ff51f8badac29"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");