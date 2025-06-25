import styled from "styled-components/native";

// * Container geral
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

// * Título “Seus Eventos”
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XLL}px;
`;

//* Linha que contém o título e o botão de adicionar */
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

//* Botão “+” */
export const AddButton = styled.TouchableOpacity`
  margin-left: auto;
`;

/* 
  *----- Estilos para o Modal -----
  *O ModalContainer ocupa toda a tela com um fundo semi-transparente
  *e centraliza verticalmente o ModalCard
*/
export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  padding: 24px;
`;

//* Cartão branco dentro do Modal */
export const ModalCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 12px;
  padding: 20px;
  elevation: 5;
`;

//* Título dentro do Modal */
export const ModalTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE};
  margin-bottom: 12px;
`;

//* Campo de texto (TextInput estilizado) */
export const InputField = styled.TextInput`
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 8px;
  padding: 0 12px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

//* Linha de botões “Cancelar” e “Criar” */
export const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

//* Botões genéricos dentro do Modal */
export const ModalButton = styled.TouchableOpacity<{ type: "cancel" | "confirm" }>`
  flex: 1;
  height: 44px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === "cancel" ? theme.COLORS.GRAY_300 : theme.COLORS.BLUE};
  align-items: center;
  justify-content: center;
  margin: 0 4px;
`;

//* Texto dentro dos botões */
export const ModalButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) =>
    //* Se for botão de confirmar (create), texto branco; se cancel, texto azul escuro */
    "#fff"};
`;

//* --------------------------- */
//* Cartão que aparece na lista de eventos */
export const EventCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

//* Texto do nome do evento dentro do cartão */
export const EventCardText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;