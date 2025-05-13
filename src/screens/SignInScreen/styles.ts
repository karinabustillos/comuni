import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding-top: 90px;

    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;