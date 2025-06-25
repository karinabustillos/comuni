import styled from 'styled-components/native';
import { TouchableOpacity, Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: ${24}; /* Interpolação numérica */
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${16}; 
  margin-top: ${40}; 
  margin-bottom: ${24}; 
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: auto;
  flex-direction: row;
  align-items: center;
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
  margin-bottom: ${8};
  margin-top: ${16}; 
`;

export const DetailText = styled.Text`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: ${8}; 
  padding: ${16};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD || 16};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const DescriptionText = styled(DetailText)`
  height: ${120}; 
  text-align-vertical: top;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${32}; 
`;

export const ActionButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: ${20}; 
  padding: ${12} ${24}; 
  margin: ${0} ${8}; 
  ${Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    android: {
      elevation: 5,
    },
  })}
`;

export const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD || 16};
  margin-left: ${8}; 
`;

export const EmptyText = styled.Text`
  margin-top: ${32};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL || 20};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: center;
`;
