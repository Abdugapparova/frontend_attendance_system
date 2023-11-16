// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaE_8Pb0yUuOdbWfyuDj10Bjwn5VOB3gs",
  authDomain: "attendese231-m.firebaseapp.com",
  projectId: "attendese231-m",
  storageBucket: "attendese231-m.appspot.com",
  messagingSenderId: "775024373779",
  appId: "1:775024373779:web:a598388cb325bf90fe8fe6",
  measurementId: "G-58TK76693P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
