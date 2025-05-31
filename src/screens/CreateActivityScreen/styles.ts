import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: auto;
  
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-right: auto;
  //margin-top: 40px;
  //margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 8px;
  padding: 16px;
`;

export const SelectButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 8px;
  padding: 16px;
`;

export const SelectText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const DescriptionInput = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 8px;
  padding: 16px;
  height: 100px;
  text-align-vertical: top;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 60%; 
  align-self: center;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 20px;
  padding: 16px;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;


