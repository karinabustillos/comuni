// src/screens/EventsScreen/styles.ts
import styled from "styled-components/native";
import imageSrc from "../../assets/bg-image-screen-events.png";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const ContentHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleButton = styled.View`
  margin-left: auto;
`;

// Título grande + ícone
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const TextHighLine = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
`;

// Botão calendário
export const CalendarButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
`;

// Imagem de abertura
export const ImageContent = styled.Image.attrs({
  source: imageSrc,
  resizeMode: "cover",
})`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-top: 20px;
`;

// Lista vazia
export const ListEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;
export const ListEmptyText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
`;

// Card do evento
export const EventCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;
export const EventCardTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
export const EventCardDate = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-top: 4px;
`;

// Overlay do modal
export const Overlay = styled.View`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

// Caixa do modal
export const ModalBox = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  width: 90%;
  padding: 24px;
  border-radius: 16px;
`;

// Título e texto do modal
export const ModalTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-bottom: 8px;
`;
export const ModalText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 6px;
`;

// Botões do modal
export const ModalActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
export const ModalButton = styled.TouchableOpacity<{
  type: "cancel" | "confirm";
}>`
  flex: 1;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === "cancel" ? theme.COLORS.GRAY_200 : theme.COLORS.BLUE};
  align-items: center;
  margin-right: ${({ type }) => (type === "cancel" ? "8px" : "0")};
`;
export const ModalButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
`;