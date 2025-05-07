import styled from 'styled-components/native';

type Props = {
  isActive: boolean;
};

export const ButtonContainer = styled.TouchableOpacity<Props>`
  background-color: ${({ theme, isActive }) => isActive ? theme.COLORS.GREEN : theme.COLORS.WHITE};
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
  padding: 20px 16px;
  border-radius: 8px;
  margin: 0 5px;
  min-width: 100px;
  //flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const ButtonText = styled.Text<Props>` 
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE : theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  /*font-size: ${({ theme }) => theme.FONT_SIZE.MD};*/
  /*padding: 4px;*/
  font-size: 16px;
  text-align: center;


`;


/*
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
*/
/*
 flex: 1;
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  margin-left: 10px;
*/

