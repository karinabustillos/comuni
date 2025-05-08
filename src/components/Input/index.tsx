import React, { useEffect, useRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container, InputContent, Title } from './styles';

type Props = TextInputProps & {
  name: string;
  text?: string;
};

export default function Input({ name, text, ...rest }: Props) {
  const inputRef = useRef<TextInput>(null);

  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue: ref => ref?.value || '',
      setValue: (ref, value) => {
        if (ref) ref.setNativeProps({ text: value });
      },
      clearValue: ref => ref?.clear(),
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Title>{text}</Title>
      <InputContent
        ref={inputRef}
        defaultValue={defaultValue}
        placeholderTextColor="#aaa"
        {...rest}
      />
      {error && <Title style={{ color: 'red' }}>{error}</Title>}
    </Container>
  );
}