import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.AQUA : theme.COLORS.BLUE};
    border-radius: 6px;
    margin: 20px;

    flex: 1;
    justify-content: center;
    align-items: center;
`;


    export const Title = styled.Text`
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

        color: ${({ theme }) => theme.COLORS.BLUE};
    `;