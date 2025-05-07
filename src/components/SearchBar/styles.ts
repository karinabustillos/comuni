import styled from "styled-components/native";
import { MagnifyingGlass } from "phosphor-react-native";

export const Container = styled.View`
    width: 90%;
    height: 45px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 
    border-width: 2px;
    border-color: ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 50px; 
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 10px;
    margin-top: 10px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GREEN}; 
`;

export const SearchIconButton = styled.TouchableOpacity`
    padding: 5px;
`;

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN, 
    weight: 'bold',
}))``;
