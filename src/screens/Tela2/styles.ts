import styled from 'styled-components/native';

export const Container = styled.View`
     flex: 1;
     width: 100%;
     background-color: ${({ theme }) => theme.COLORS.WHITE};
     padding: 24px;
     align-items: center;
     
     /*width: 100%;
     background-color: ${({ theme }) => theme.COLORS.WHITE};
     padding: 24px;
     flex-direction: column;
     align-items: center;
     justify-content: center;*/
`;
