import styled from 'styled-components/native';

interface FilterButtonProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;


`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XLL}px;
  margin-top: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  background-color: ${({ active, theme }) => active ? theme.COLORS.BLUE_300 : theme.COLORS.GRAY};
  //border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
  padding: 10px 12px;
  border-radius: 8px;
  margin: 40px 0px;
`;

export const FilterText = styled.Text<FilterButtonProps>`
  color: ${({ active, theme }) => theme.COLORS.BLUE};
  font-family: ${({ active, theme }) => active ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const AddButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const EmptyText = styled.Text`
  margin-top: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family:  ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: left;
`;



