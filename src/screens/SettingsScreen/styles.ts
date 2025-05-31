import styled from 'styled-components/native';

export const Container = styled.ScrollView`
     flex: 1;
     width: 100%;
     background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
     width: 100%;
     align-items: center;
     padding: 32px 24px 24px;
     background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`;

export const UserInfo = styled.View`
     align-items: center;
`;

export const Avatar = styled.Image`
     width: 120px;
     height: 120px;
     border-radius: 60px;
     //border-width: 3px;
     //border-color: ${({ theme }) => theme.COLORS.BLUE};
     margin-bottom: 16px;
`;

export const UserName = styled.Text`
     font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD}; 
     color: ${({ theme }) => theme.COLORS.BLUE}; 
     margin-bottom: 4px;     
`;

export const UserEmail = styled.Text`
     font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR}; 
     color: ${({ theme }) => theme.COLORS.BLUE}; 
     opacity: 0.8;
`;

export const SettingsSection = styled.View`
     width: 100%;
     padding: 24px;
     margin-top: 16px;
`;

export const SectionTitle = styled.Text`
     font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD}; 
     color: ${({ theme }) => theme.COLORS.BLUE}; 
     margin-bottom: 16px;
`;

export const Option = styled.TouchableOpacity`
     width: 100%;
     flex-direction: row;
     align-items: center;
     padding: 16px 0;
     border-bottom-width: 1px;
     border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200}; 
`;

export const OptionText = styled.Text`
     flex: 1;
     font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR}; 
     color: ${({ theme }) => theme.COLORS.BLUE}; 
     margin-left: 16px;
`;

export const OptionIcon = styled.View`
     font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
     color: ${({ theme }) => theme.COLORS.BLUE}; 
`;

export const LogoutButton = styled.TouchableOpacity`
     width: 60%;
     align-self: center;
     align-items: center;
     justify-content: center;
     padding: 20px;
     margin: 24px 0;
     border-radius: 20px;
     background-color: ${({ theme }) => theme.COLORS.BLUE_500}; 
`;

export const LogoutButtonText = styled.Text`
     font-size: 16px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD}; 
     color: ${({ theme }) => theme.COLORS.WHITE}; 
`;

export const VersionText = styled.Text`
     font-size: 12px;
     font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR}; 
     color: ${({ theme }) => theme.COLORS.BLUE}; 
     text-align: center;
     margin-bottom: 16px;
`;