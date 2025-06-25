// src/hooks/useAuth.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User, 
} from "firebase/auth";
import { auth } from "../configFirebase/firebase"; 

type AuthContextData = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({
  user: null,
  loading: true,
  signIn: async () => false,
  signUp: async () => false,
  signOut: async () => { },
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Certifique-se de que 'auth' está definido antes de usar 'onAuthStateChanged'
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
      });
      return unsubscribe;
    } else {
      console.error("Firebase Auth instance is not available.");
      setLoading(false); // Definir loading como false mesmo em caso de erro para não travar o app
    }
  }, []); // Dependência vazia para rodar apenas uma vez na montagem do componente

  async function signIn(email: string, password: string) {
    if (!auth) {
      console.error("Auth instance is not available for signIn.");
      return false;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error("Sign In Error:", error);
      return false;
    }
  }

  async function signUp(name: string, email: string, password: string) {
    if (!auth) {
      console.error("Auth instance is not available for signUp.");
      return false;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      return true;
    } catch (error) {
      console.error("Sign Up Error:", error);
      return false;
    }
  }

  async function signOut() {
    if (!auth) {
      console.error("Auth instance is not available for signOut.");
      return;
    }
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Sign Out Error:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
