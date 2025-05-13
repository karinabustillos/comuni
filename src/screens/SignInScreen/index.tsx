// src/screens/SignInScreen/index.tsx
import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useAuth } from "../../hooks/useAuth";           // 👉 caminho correto
import { AppStackParamList } from "../../navigation/types";

import { Container } from "./styles";
import HeaderKaue from "@components/HeaderKaue";
import HighLine from "@components/HighLine";
import LowLine from "@components/LowLine";
import Input from "@components/Input";
import Button from "@components/Button";

type SignInScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList, "SignInScreen">;

export default function SignInScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();                          // ← hook do contexto
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const handleSignUp = async () => {
    const displayName = name.trim();
    const emailTrimmed = email.trim();

    try {
      const success = await signUp(displayName, emailTrimmed, password);
      if (success) {
        navigation.replace("Main");
      } else {
        Alert.alert(
          "Falha no cadastro",
          "Não foi possível se cadastrar. E-mail já existe ou dados inválidos."
        );
      }
    } catch (err) {
      Alert.alert("Erro", "Ocorreu um erro durante o cadastro");
    }
  };

  return (
    <Container>
      <HighLine text="Crie sua conta" />
      <LowLine
        type="PRIMARY"
        text="Já tem cadastro? "
        link="Faça login"
        onPress={() => navigation.navigate("LogInScreen")}
      />

      <Input
        text="Nome completo"
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <Input
        text="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        text="Senha"
        placeholder="••••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Cadastrar" onPress={handleSignUp} />

      <LowLine
        type="SECONDARY"
        link="Esqueci minha senha"
        onPress={() => navigation.navigate("ResetPasswordScreen")}
      />
    </Container>
  );
}
