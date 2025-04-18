import styled from 'styled-components/native';

export const Container = styled.View`
     width: 100%;
     background-color: ${({ theme }) => theme.COLORS.WHITE};
     padding: 24px;
     flex-direction: row;
     align-items: center;
     justify-content: center;
`;

export const Logo = styled.Image`
     width: 130px;
     height: 125px;
     margin-bottom: 24px;
     margin-top: 200px;
`;
