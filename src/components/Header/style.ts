import styled from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';

export const TitleHeader = styled.View`
    padding: 60px 24px 40px;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    overflow: hidden;
`;

export const ButtonHeader = styled.TouchableOpacity`
    color: ${({ theme }) => theme.COLORS.BLUE};

    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
`;

export const TextHeader = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    
    color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const IconHeader = styled(ArrowLeft).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.XXL,
    color: theme.COLORS.BLUE
}))``;