import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd52TmGl6nSdvF1YXPp1PcbdHaQfhzo84",
  authDomain: "noteballs-a1b73.firebaseapp.com",
  projectId: "noteballs-a1b73",
  storageBucket: "noteballs-a1b73.appspot.com",
  messagingSenderId: "636044193222",
  appId: "1:636044193222:web:d4287a5410384608bc56c7",
  measurementId: "G-C32FFGPX2G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export {
    db,
    auth
}
