import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCisZr6bbm5j3fm6blEKbZBvSeOVe2ZrP4",
  authDomain: "connected-book.firebaseapp.com",
  projectId: "connected-book",
  storageBucket: "connected-book.appspot.com",
  messagingSenderId: "87736149134",
  appId: "1:87736149134:web:21771faa76a0e9384795df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 