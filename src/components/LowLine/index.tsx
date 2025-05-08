import React from 'react';

import { Container, TextBase, LinkText, LowLineTypeStyleProps } from './styles'

type Props = {
    text?: string;
    link?: string;
    type?: LowLineTypeStyleProps;
}

export default function LowLine({ text, link, type='PRIMARY' }: Props) {
    return (
        <Container>
            <TextBase>
                {text}
                <LinkText
                    type={type}
                >
                {link}
                </LinkText>
            </TextBase>
        </Container>
    )
}