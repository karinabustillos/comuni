import React from "react";

import { Container } from './styles';

import Header from '@components/Header'
import HighLine from '@components/HighLine'
import LowLine from '@components/LowLine'
import Input from "@components/Input";
import Buttun from '@components/Button'


export default function ResetPasswordScreen() {
  return (
    <Container>
      <Header text="Sair" />
      <HighLine text="Esqueceu a senha?" />
      <LowLine
        type="PRIMARY"
        text="Redefina sua senha com o e-mail cadastrado" 
        />
      <Input
        placeholder="Digite seu e-mail cadastrado"
      />
      <Buttun 
        title="Enviar"
      />
    </Container>
  );
}
