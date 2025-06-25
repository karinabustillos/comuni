import { initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import { getFirestore, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdIBAgHg5UmrZ1PXpJZav4JKG4XVHwOgQ",
  authDomain: "comuni-7681f.firebaseapp.com",
  projectId: "comuni-7681f",
  storageBucket: "comuni-7681f.firebasestorage.app", 
  messagingSenderId: "233178608708",
  appId: "1:233178608708:web:043250b69d128fb1ee3811"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, User, db, Timestamp };


/*import { initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";
import { getFirestore, Timestamp } from 'firebase/firestore';
//import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyBdIBAgHg5UmrZ1PXpJZav4JKG4XVHwOgQ",
  authDomain: "comuni-7681f.firebaseapp.com",
  projectId: "comuni-7681f",
  storageBucket: "comuni-7681f.firebasestorage.app",
  messagingSenderId: "233178608708",
  appId: "1:233178608708:web:043250b69d128fb1ee3811"
};

//inicializa o app Firebase
const app = initializeApp(firebaseConfig);

//instância do serviço de autenticação
const auth = getAuth(app);

const db = getFirestore(app);

export { auth, User, db, Timestamp };





*/