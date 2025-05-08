import styled from "styled-components/native";

export type LowLineTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: LowLineTypeStyleProps;
    login?: boolean;
}

export const Container = styled.View`
    padding: 12px;

    align-items: center;
`;

export const Container2 = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const LinkButton = styled.TouchableOpacity``;


export const TextBase = styled.Text `
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LinkText = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.AQUA : theme.COLORS.GREEN_400};
`;