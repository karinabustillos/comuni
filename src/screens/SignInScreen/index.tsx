import React, { useRef } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container } from './styles';

import Header from '@components/Header';
import HighLine from '@components/HighLine';
import LowLine from '@components/LowLine';
import Input from '@components/Input';
import Button from '@components/Button';

export default function SignUpScreen() {
  const formRef = useRef<FormHandles>(null);

  async function handleSignUp(data: {
    name: string;
    email: string;
    password: string;
  }) {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail obrigatório'),
        password: Yup.string()
          .min(6, 'Senha deve ter no mínimo 6 caracteres')
          .required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      Alert.alert('Conta criada com sucesso!');
      //* navigation.navigate('Add page Home here');

    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};

        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });

        formRef.current?.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Header text="Voltar" />
      <HighLine text="Crie uma nova conta" />
      <LowLine
        type="PRIMARY"
        text="Já é cadastrado? Faça "
        link="login"
      />

      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input
          name="name"
          text="Nome"
          placeholder="Digite seu nome completo"
        />
        <Input
          name="email"
          text="E-mail"
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
        />
        <Input
          name="password"
          text="Senha"
          placeholder="********"
          secureTextEntry
        />

        <Button
          title="Sign In"
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>
    </Container>
  );
}