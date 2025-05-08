import React from 'react';

import { Container, Title } from './styles'

export default function HighLine(props: { text: string; }) {
    return(
        <Container>
            <Title>{
                props.text}
            </Title>
        </Container>
    )
}