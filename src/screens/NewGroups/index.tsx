import React from "react";

import { Container } from './styles';

import Header from '@components/Header'
import HighLine from '@components/HighLine'
import LowLine from '@components/LowLine'
import Input from "@components/Input";
import Buttun from '@components/Button'


export default function NewGroups() {
  return (
    <Container>
      <Header text="Sair" />
      <HighLine text="Crie uma nova conta" />
      <LowLine
        type="PRIMARY"
        text="Já é cadastrado? Faça "
        link="login" />
      <Input
        text="Nome"
        placeholder="Digite seu nome completo"
      />
      <Input
        text="Senha"
        placeholder="********"
      />
      <LowLine
        type="SECONDARY"
        link="Esqueci minha senha"
        />
      <Buttun 
        title="Sign In"
      />
    </Container>
  );
}
