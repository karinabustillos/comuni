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

export default function ResetPasswordScreen() {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: any) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });

      Alert.alert("E-mail enviado", "Enviamos um link para o e-mail informado!");

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages: any = {};
        err.inner.forEach(error => {
          if (error.path) errorMessages[error.path] = error.message;
        });
        formRef.current?.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Header text="Sair" />
      <HighLine text="Esqueceu a senha?" />
      <LowLine type="PRIMARY" text="Redefina sua senha com o e-mail cadastrado" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" text="E-mail" placeholder="Digite seu e-mail" />
        <Button title="Enviar" onPress={() => formRef.current?.submitForm()} />
      </Form>
    </Container>
  );
}
