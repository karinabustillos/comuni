import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { ThemeProvider, useTheme } from "styled-components/native";
import { CaretLeft, Calendar as CalendarIcon } from "phosphor-react-native";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import {
  Container,
  ContentHeader,
  TitleButton,
  Content,
  TextHighLine,
  CalendarButton,
  ImageContent,
  ListEmptyContainer,
  ListEmptyText,
  EventCard,
  EventCardTitle,
  EventCardDate,
  Overlay,
  ModalBox,
  ModalTitle,
  ModalText,
  ModalActions,
  ModalButton,
  ModalButtonText,
} from "./styles";

import HeaderScreens from "@components/HeaderScreens";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import theme from "@theme/index";

type Evento = {
  id: string;
  titulo: string;
  data: string;
  local: string;
  descricao: string;
};

export default function EventsScreen() {
  const { COLORS } = useTheme();

  const [eventos, setEventos] = useState<Evento[]>([]);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [eventoSelecionado, setEventoSelecionado] = useState<Evento | null>(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const user = auth().currentUser;
        if (!user) return;

        const snapshot = await firestore()
          .collection('events')
          .where('userId', '==', user.uid)
          .get();

        const dados: Evento[] = snapshot.docs.map(doc => ({
          id: doc.id,
          titulo: doc.data().titulo,
          data: doc.data().data,
          local: doc.data().local,
          descricao: doc.data().descricao,
        }));

        setEventos(dados);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    }

    loadEvents();
  }, []);

  function openModal(evento: Evento) {
    setEventoSelecionado(evento);
    setModalVisivel(true);
  }

  function closeModal() {
    setModalVisivel(false);
    setEventoSelecionado(null);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContentHeader>
          <HeaderScreens
            icon={CaretLeft}
            iconColor={COLORS.BLUE}
            showBackButtonScreen
          />
          <TitleButton>
            <Button title="Seus eventos" />
          </TitleButton>
        </ContentHeader>

        <Content>
          <TextHighLine>
            Eventos{"\n"}por{"\n"}perto...
          </TextHighLine>
          <CalendarButton>
            <CalendarIcon size={24} color={COLORS.BLUE} weight="bold" />
          </CalendarButton>
        </Content>

        <ImageContent />

        <FlatList
          data={eventos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 20 }}
          renderItem={({ item }) => (
            <EventCard onPress={() => openModal(item)}>
              <EventCardTitle>{item.titulo}</EventCardTitle>
              <EventCardDate>{item.data}</EventCardDate>
            </EventCard>
          )}
          ListEmptyComponent={() => (
            <ListEmptyContainer>
              <ListEmptyText>
                Não há nenhum{'\n'}evento em sua{'\n'}vizinhança no{'\n'}momento.
              </ListEmptyText>
            </ListEmptyContainer>
          )}
        />

        {modalVisivel && eventoSelecionado && (
          <Overlay>
            <ModalBox>
              <ModalTitle>{eventoSelecionado.titulo}</ModalTitle>
              <ModalText>{eventoSelecionado.data}</ModalText>
              <ModalText>{eventoSelecionado.local}</ModalText>
              <ModalText>{eventoSelecionado.descricao}</ModalText>

              <ModalActions>
                <ModalButton type="cancel" onPress={closeModal}>
                  <ModalButtonText>Cancelar</ModalButtonText>
                </ModalButton>
                <ModalButton
                  type="confirm"
                  onPress={() => {
                    closeModal();
                  }}
                >
                  <ModalButtonText>Adicionar ao calendário</ModalButtonText>
                </ModalButton>
              </ModalActions>
            </ModalBox>
          </Overlay>
        )}
      </Container>
    </ThemeProvider>
  );
}
