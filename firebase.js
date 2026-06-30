import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxQOH82y4-bncBHAlt2NCOErRL8N8TL2c",
  authDomain: "birthday-surprise-d817e.firebaseapp.com",
  projectId: "birthday-surprise-d817e",
  storageBucket: "birthday-surprise-d817e.firebasestorage.app",
  messagingSenderId: "385101853497",
  appId: "1:385101853497:web:0acf7dcf8a31c44a7c2ee8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.app = app;
window.db = db;
