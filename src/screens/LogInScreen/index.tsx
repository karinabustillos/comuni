// src/screens/LogInScreen/index.tsx
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../hooks/useAuth';
import { AppStackParamList } from '../../navigation/types';

import { Container } from './styles';
import HeaderKaue from '@components/HeaderKaue';
import HighLine from '@components/HighLine';
import LowLine from '@components/LowLine';
import Input from "@components/Input";
import Button from '@components/Button';

//definicao do tipo para a navegação
type LogInScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'LogInScreen'>;

export default function LogInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigation = useNavigation<LogInScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      const success = await signIn(email, password);
      if (success) {
        navigation.replace('Main'); //usando replace para evitar voltar para login
      } else {
        alert('E-mail ou senha incorretos');
      }
    } catch (error) {
      alert('Ocorreu um erro durante o login');
    }
  };

  return (
    <Container>
      <HeaderKaue text="Sair" />
      <HighLine text="Login" />
      <LowLine
        type="PRIMARY"
        text="você não possui um login ainda? "
        link="Cadastre-se" 
        onPress={() => navigation.navigate('SignInScreen')}
      />
        
      <Input
        text="E-mail" 
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        text="Senha"
        placeholder="********"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Entrar" 
        onPress={handleLogin}
      />
      <LowLine
        type="SECONDARY"
        link="Esqueci minha senha"
        onPress={() => navigation.navigate('ResetPasswordScreen')}
      />
    </Container>
  );
}