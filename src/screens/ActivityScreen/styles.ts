import styled from 'styled-components/native';

interface FilterButtonProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: ${24}; /* Interpolação numérica */
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XLL || 24};
  margin-top: ${40}; /* Interpolação numérica */
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${16}; /* Interpolação numérica */
`;

export const FilterButton = styled.TouchableOpacity<FilterButtonProps>`
  background-color: ${({ active, theme }) => active ? theme.COLORS.BLUE_300 : theme.COLORS.GRAY};
  padding: ${10} ${12}; /* Interpolação numérica */
  border-radius: ${8}; /* Interpolação numérica */
  margin: ${40} ${0}; /* Interpolação numérica */
`;

export const FilterText = styled.Text<FilterButtonProps>`
  color: ${({ active, theme }) => active ? theme.COLORS.WHITE : theme.COLORS.BLUE};
  font-family: ${({ active, theme }) => active ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD || 16};
`;

export const AddButton = styled.TouchableOpacity`
  margin-left: auto;
`;

export const EmptyText = styled.Text`
  margin-top: ${32}; /* Interpolação numérica */
  font-size: ${({ theme }) => theme.FONT_SIZE.XL || 20};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-align: left;
`;
