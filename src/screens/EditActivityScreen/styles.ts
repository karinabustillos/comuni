import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: ${24}; /* Interpolação numérica */
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${16}; /* Interpolação numérica */
  margin-top: ${40}; /* Interpolação numérica */
  margin-bottom: ${24}; /* Interpolação numérica */
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: auto;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL || 20};
  margin-right: auto;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD || 16};
  margin-bottom: ${8}; /* Interpolação numérica */
  margin-top: ${16}; /* Interpolação numérica */
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: ${8}; /* Interpolação numérica */
  padding: ${16}; /* Interpolação numérica */
`;

export const SelectButton = styled.View` /* Corrigido de SelectVew para SelectButton */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: ${8}; /* Interpolação numérica */
  padding: ${16}; /* Interpolação numérica */
`;

export const SelectText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM || 14};
`;

export const DescriptionInput = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: ${8}; /* Interpolação numérica */
  padding: ${16}; /* Interpolação numérica */
  height: ${100}; /* Interpolação numérica */
  text-align-vertical: top;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: ${60}%;
  align-self: center;
  margin-top: ${32}; /* Interpolação numérica */
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: ${20}; /* Interpolação numérica */
  padding: ${16}; /* Interpolação numérica */
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD || 16};
`;
