import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

type Props = {
  title: string;
  isActive: boolean;
  onPress: () => void;
};

export function FilterButton({ title, isActive, onPress }: Props) {
  return (
    <ButtonContainer isActive={isActive} onPress={onPress}>
      <ButtonText isActive={isActive}>{title}</ButtonText>
    </ButtonContainer>
  );
}
