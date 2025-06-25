// src/screens/LogInScreen/index.tsx
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

// tipo para a navegação
type LogInScreenNavigationProp =
  NativeStackNavigationProp<AppStackParamList, "LogInScreen">;

export default function LogInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();                          // ← hook do contexto
  const navigation = useNavigation<LogInScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      const success = await signIn(email.trim(), password);
      if (success) {
        navigation.replace("Main");
      } else {
        Alert.alert("Login inválido", "E-mail ou senha incorretos");
      }
    } catch (err) {
      Alert.alert("Erro", "Ocorreu um erro durante o login");
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
        onPress={() => navigation.navigate("SignInScreen")}
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
        placeholder="********"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <LowLine
        type="SECONDARY"
        link="Esqueci minha senha"
        onPress={() => navigation.navigate("ResetPasswordScreen")}
      />
    </Container>
  );
}