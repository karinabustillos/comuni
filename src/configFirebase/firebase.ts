import { initializeApp } from "firebase/app";
import { getAuth, User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdIBAgHg5UmrZ1PXpJZav4JKG4XVHwOgQ",
  authDomain: "comuni-7681f.firebaseapp.com",
  projectId: "comuni-7681f",
  storageBucket: "comuni-7681f.firebasestorage.app",
  messagingSenderId: "233178608708",
  appId: "1:233178608708:web:043250b69d128fb1ee3811"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Instância do serviço de autenticação
const auth = getAuth(app);

export { auth, User };