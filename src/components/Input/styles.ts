import styled from "styled-components/native";
import { TextInput } from 'react-native';

export const Container = styled.View`
    margin-bottom: 5px;
`;

export const Title = styled.Text`
        font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

        margin: 0 20px;
        color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InputContent = styled(TextInput)`
    min-width: 56px;
    min-height: 56px;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.AQUA};

    border-radius: 6px;
    padding: 16px;
    margin: 0 20px;

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;