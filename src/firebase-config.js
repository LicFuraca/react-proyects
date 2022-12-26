import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHqEPgnQRjiHHDB4Ufl6QEwl4SEB44TLw",
  authDomain: "to-do-list-c1160.firebaseapp.com",
  databaseURL: "https://to-do-list-c1160-default-rtdb.firebaseio.com",
  projectId: "to-do-list-c1160",
  storageBucket: "to-do-list-c1160.appspot.com",
  messagingSenderId: "1033730795521",
  appId: "1:1033730795521:web:58a3df0a42a66b28543800",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
