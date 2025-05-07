import styled from "styled-components/native";
import { Info } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  //margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center; /*space-between talvez é melhor */
  //padding-bottom: 40px;
  padding: 10px 0 50px;
  //padding-bottom: 20px;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 58px;
`;

export const InfoIcon = styled(Info).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN
}))``;

export const LogoButton = styled.TouchableOpacity`
  flex: 1;
`;

export const InfoButton = styled.TouchableOpacity`

`;

