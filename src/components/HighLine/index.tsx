import React from 'react';

import { Container, Title } from './style'

export default function HighLine(props: { text: string; }) {
    return(
        <Container>
            <Title>{
                props.text}
            </Title>
        </Container>
    )
}