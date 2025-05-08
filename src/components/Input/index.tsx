import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputContent, Title } from './styles';

type InputProps = TextInputProps & {
    text: string;
};

export default function Input({ text, ...rest }: InputProps) {
    return (
        <Container>
            <Title>
                {text}
            </Title>
            <InputContent
                {...rest}
            />
        </Container>
    );
}