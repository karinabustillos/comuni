import styled from 'styled-components/native';

export const Container = styled.ScrollView`
     flex: 1;
     width: 100%;
     background-color: ${({ theme }) => theme.COLORS.WHITE};
     padding: 24px;
     //scroll-padding-bottom: 80px;
     //padding-bottom: 80px;     
     //flex-direction: row;
     //align-items: center;
     //justify-content: flex-start;
`;

export const Title = styled.Text`
     color: ${({ theme }) => theme.COLORS.BLUE};
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
     font-size: ${({ theme }) => theme.FONT_SIZE.XLL}px;
     margin-top: 40px;
`;

export const Highlight = styled.Text`
     color: ${({ theme }) => theme.COLORS.BLUE};
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
     width: 100%;
     font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
     color: ${({ theme }) => theme.COLORS.GREEN};
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
     margin-top: 20px;
     text-align: left;
`;

export const Card = styled.View`
     width: 100%;
     background-color: ${({ theme }) => theme.COLORS.GRAY};
     padding: 20px 20px;
     margin-top: 20px;
     border-radius: 20px;

`;

export const CardTitle = styled.Text`
     font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
     color: ${({ theme }) => theme.COLORS.GRAY_300};
     margin-bottom: 1px;
`;

export const CardText = styled.Text`
     font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
     color: ${({ theme }) => theme.COLORS.GRAY_300};
     margin-bottom: 1px;
`;

