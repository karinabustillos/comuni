import { Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export const CardContainer = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  border-left-width: 5px;
  border-left-color: ${({ theme }) => theme.COLORS.BLUE_300};
  ${Platform.select({ // Estilos de sombra condicionais para iOS e Android
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.1;
      shadow-radius: 4px;
    `,
    android: `
      elevation: 3;
    `,
  })}
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG || 18};
  color: ${({ theme }) => theme.COLORS.BLUE};
  margin-bottom: ${8}; /* Interpolação numérica */
`;

export const CardCategory = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD || 16};
  color: ${({ theme }) => theme.COLORS.BLUE_300};
  margin-bottom: ${4}; 
`;

export const CardDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM || 14};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: ${8};
`;

export const CardDate = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS || 12};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: right;
`;