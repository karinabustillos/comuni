// src/screens/EventDetailScreen/styles.ts
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const DetailTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XLL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE};
  margin-bottom: 20px;
`;

export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-bottom: 6px;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

export const DetailButton = styled.TouchableOpacity.attrs<{ type: "update" | "delete" }>(
  ({ theme, type }) => ({
    activeOpacity: 0.8,
    style: {
      backgroundColor: type === "update" ? theme.COLORS.BLUE : theme.COLORS.RED,
    },
  })
)<{ type: "update" | "delete" }>`
  flex: 1;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
`;

DetailButton.Text = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
`;
