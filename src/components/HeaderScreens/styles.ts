import styled from "styled-components/native";

export const Container = styled.View`
    padding: 60px 24px 40px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonHeader = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.WHITE};

    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const DynamicButtonWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;