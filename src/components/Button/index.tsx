import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    onPress?: () => void;

};

export default function Buttun({ title, type = 'PRIMARY', onPress, ...rest }: Props) {
    return (
        <Container 
            type={type}
            onPress={onPress}
            {...rest} 

        >
            <Title>
                {title}
            </Title>
        </Container>
    );
} 