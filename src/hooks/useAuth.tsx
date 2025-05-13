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

// Inicializa com um objeto padrão que satisfaz AuthContextData
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
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function signIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch {
      return false;
    }
  }

  async function signUp(name: string, email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      return true;
    } catch {
      return false;
    }
  }

  async function signOut() {
    await firebaseSignOut(auth);
  }

  return (
    <AuthContext.Provider
      value= {
        {
          user,
          loading,
          signIn,
          signUp,
          signOut,
        }
      }
    >
      { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
