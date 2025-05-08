import { useState } from 'react';

type User = {
  email: string;
  name: string;
};

type TempUser = {
  email: string;
  password: string;
  name: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [tempUsers, setTempUsers] = useState<TempUser[]>([]);

  const signIn = (email: string, password: string) => {
    const userExists = tempUsers.find(u => u.email === email && u.password === password);
    if (userExists) {
      setUser({ email: userExists.email, name: userExists.name });
      return true;
    }
    return false;
  };

  const signUp = (name: string, email: string, password: string) => {
    //verificando se usuário já existe
    if (tempUsers.some(u => u.email === email)) {
      return false;
    }
    
    setTempUsers([...tempUsers, { email, password, name }]);
    setUser({ email, name });
    return true;
  };

  const resetPassword = (email: string) => {
    //simula envio de e-mail
    return tempUsers.some(u => u.email === email);
  };

  const signOut = () => {
    setUser(null);
  };

  return { user, signIn, signUp, resetPassword, signOut };
}