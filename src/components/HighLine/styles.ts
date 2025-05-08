import styled from "styled-components/native";

export const Container = styled.View`
    padding: 24px 24px 8px;

    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;

    text-align: center;
    color: ${({theme}) => theme.COLORS.WHITE};
`;