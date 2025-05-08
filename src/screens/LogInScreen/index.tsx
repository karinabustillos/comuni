import React, { useRef } from "react";
import { Alert } from "react-native";
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from "yup";

import { Container } from './styles';
import Header from '@components/Header';
import HighLine from '@components/HighLine';
import LowLine from '@components/LowLine';
import Input from "@components/Input";
import Button from '@components/Button';

export default function LogInScreen({ navigation }: any) {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      //* navigation.navigate('Add page Home here');

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages: any = {};
        err.inner.forEach(error => {
          if (error.path) errorMessages[error.path] = error.message;
        });
        formRef.current?.setErrors(errorMessages);
        return;
      }

      Alert.alert('Erro no login', 'Tente novamente mais tarde');
    }
  }

  return (
    <Container>
      <Header text="Sair" />
      <HighLine text="Login" />
      <LowLine type="PRIMARY" text="você não possui um login ainda? " link="Cadastre-se" />
      
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" text="E-mail" placeholder="Digite seu e-mail" />
        <Input name="password" text="Senha" placeholder="********" secureTextEntry />

        <Button title="Entrar" onPress={() => formRef.current?.submitForm()} />
      </Form>

      <LowLine type="SECONDARY" link="Esqueci minha senha" />
    </Container>
  );
}
