import React from 'react';

import { Container, TextBase, LinkText, LowLineTypeStyleProps, Container2, LinkButton } from './styles'

type Props = {
    text?: string;
    link?: string;
    type?: LowLineTypeStyleProps;
    onPress?: () => void;

}

export default function LowLine({ text, link, type='PRIMARY',  onPress }: Props) {
    return (
        <Container>
            <Container2>
                <TextBase>{text}</TextBase>
                <LinkButton onPress={onPress}>
                    <LinkText type={type}>{link}</LinkText>
                </LinkButton>
            </Container2>
            
        </Container>
    )
}