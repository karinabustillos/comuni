import React from 'react';
import { Container, Title, IconContainer, PlusIcon } from './styles';

type Props = {
  title: string;
};

export function CardItem({ title }: Props) {
  return (
    <Container>
      <IconContainer />
      <Title>{title}</Title>
      <PlusIcon />
    </Container>
  );
}
