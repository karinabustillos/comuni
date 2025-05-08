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

type SignInScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'SignInScreen'>;

export default function SignInScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const handleSignUp = async () => {
    try {
      const success = await signUp(name, email, password);
      if (success) {
        navigation.replace('Main');
      } else {
        alert('E-mail já cadastrado');
      }
    } catch (error) {
      alert('Ocorreu um erro durante o cadastro');
    }
  };

  return (
    <Container>
      <HighLine text="Crie uma nova conta" />
      <LowLine
        type="PRIMARY"
        text="Já é cadastrado? Faça "
        link="login"
        onPress={() => navigation.navigate('LogInScreen')}
      />
      <Input
        text="Nome"
        placeholder="Digite seu nome completo"
        value={name}
        onChangeText={setName}
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
        title="Sign In"
        onPress={handleSignUp}
      />
      <LowLine
        type="SECONDARY"
        link="Esqueci minha senha"
        onPress={() => navigation.navigate('ResetPasswordScreen')}
      />
    </Container>
  );
}