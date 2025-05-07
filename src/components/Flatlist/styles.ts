import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding-top: 60px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: center;
`;

export const CardsContainer = styled.View`
  width: 100%;

  /*align-items: center;
  padding-top: 50px;*/
  
`;
