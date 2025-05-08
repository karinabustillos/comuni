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

type ResetPasswordScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'ResetPasswordScreen'>;

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');
  const { resetPassword } = useAuth();
  const navigation = useNavigation<ResetPasswordScreenNavigationProp>();

  const handleResetPassword = () => {
    const success = resetPassword(email);
    if (success) {
      alert('E-mail de redefinição enviado!');
      navigation.navigate('LogInScreen');
    } else {
      alert('E-mail não cadastrado');
    }
  };

  return (
    <Container>
      <HeaderKaue text="Sair" />
      <HighLine text="Esqueceu a senha?" />
      <LowLine
        type="PRIMARY"
        text="Redefina sua senha com o e-mail cadastrado" 
      />
      <Input
        placeholder="Digite seu e-mail cadastrado"
        value={email}
        onChangeText={setEmail}
      />
      <Button 
        title="Enviar"
        onPress={handleResetPassword}
      />
    </Container>
  );
}