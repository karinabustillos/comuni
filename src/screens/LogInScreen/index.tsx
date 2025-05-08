import React from "react";

import { Container } from './styles';

import Header from '@components/Header'
import HighLine from '@components/HighLine'
import LowLine from '@components/LowLine'
import Input from "@components/Input";
import Buttun from '@components/Button'


export default function LogInScreen() {
  return (
    <Container>
      <Header text="Sair" />
      <HighLine text="Login" />
      <LowLine
        type="PRIMARY"
        text="você não possui um login ainda? "
        link="Cadastre-se" />
      <Input
        text="Nome"
        placeholder="Digite seu nome completo"
      />
      <Input
        text="Senha"
        placeholder="********"
        secureTextEntry={true}
      />
      <Buttun
        title="Sign In"
      />
      <LowLine
        type="SECONDARY"
        link="Esqueci minha senha"
      />
    </Container>
  );
}
