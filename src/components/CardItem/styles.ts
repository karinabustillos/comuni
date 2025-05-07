import styled from 'styled-components/native';
import { Plus } from 'phosphor-react-native';

export const Container = styled.View`
  width: 90%;
  height: 80px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 20px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  margin-left: 10px;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 12px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BLUE,
  weight: 'bold'
}))``;
