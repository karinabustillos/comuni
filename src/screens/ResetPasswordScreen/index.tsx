import React, { useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';

import { Container } from './styles';
import HeaderKaue from '@components/HeaderKaue';
import HighLine from '@components/HighLine';
import LowLine from '@components/LowLine';
import Input  from "@components/Input";
import Button from '@components/Button';

import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

type ResetPasswordScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList, 'ResetPasswordScreen'>;

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<ResetPasswordScreenNavigationProp>();
  const auth = getAuth();

  const inputRef = useRef<TextInput>(null);



  const handleResetPassword = async () => {
    const emailTrimmed = email.trim();

    if (!emailTrimmed) {
      alert("Digite um e-mail válido.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, emailTrimmed);
      alert('E-mail de redefinição enviado! Verifique sua caixa de entrada.');
      navigation.navigate('LogInScreen');
    } catch (error) {
      console.error("Erro ao enviar e-mail de redefinição:", error);
      alert('Não foi possível enviar o e-mail. Verifique se o e-mail está correto.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <HeaderKaue showBackButtonScreen text="Sair" onPress={() => navigation.navigate("SignInScreen")}/>
            <HighLine text="Esqueceu a senha?" />
            <LowLine
              type="PRIMARY"
              text="Redefina sua senha com o e-mail cadastrado"
            />
            <Input
              placeholder="Digite seu e-mail cadastrado"
              value={email}
              onChangeText={setEmail}
              ref={inputRef}
              keyboardType="email-address"
              returnKeyType="done"
              onSubmitEditing={handleResetPassword}
            />
            <Button
              title="Enviar"
              onPress={handleResetPassword}
            />
          </Container>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}