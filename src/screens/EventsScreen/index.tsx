// src/screens/EventsScreen/index.tsx
import React, { useEffect, useState } from "react";
import { FlatList, Modal } from "react-native";
import { CaretLeft, Calendar as CalendarIcon } from "phosphor-react-native";

import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


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
import Button from "@components/Button";
import { useTheme } from "styled-components/native";
import { auth, db } from "src/configFirebase/firebase";

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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "events"),
            where("userId", "==", user.uid)
          );

          const querySnapshot = await getDocs(q);

          const dados: Evento[] = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              titulo: data.titulo,
              data: data.data,
              local: data.local,
              descricao: data.descricao,
            };
          });

          setEventos(dados);
        } catch (error) {
          console.error("Erro ao buscar eventos:", error);
        }
      } else {
        setEventos([]);
      }
    });

    return () => unsubscribe();
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
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <EventCard onPress={() => openModal(item)}>
            <EventCardTitle>{item.titulo}</EventCardTitle>
            <EventCardDate>{item.data}</EventCardDate>
          </EventCard>
        )}
        ListEmptyComponent={() => (
          <ListEmptyContainer>
            <ListEmptyText>
              Não há nenhum{'\n'}evento em sua agenda
            </ListEmptyText>
          </ListEmptyContainer>
        )}
      />

      <Modal visible={modalVisivel} transparent animationType="fade">
        <Overlay>
          <ModalBox>
            {eventoSelecionado && (
              <>
                <ModalTitle>{eventoSelecionado.titulo}</ModalTitle>
                <ModalText>Data: {eventoSelecionado.data}</ModalText>
                <ModalText>Local: {eventoSelecionado.local}</ModalText>
                <ModalText>Descrição: {eventoSelecionado.descricao}</ModalText>

                <ModalActions>
                  <ModalButton type="cancel" onPress={closeModal}>
                    <ModalButtonText>Fechar</ModalButtonText>
                  </ModalButton>
                </ModalActions>
              </>
            )}
          </ModalBox>
        </Overlay>
      </Modal>
    </Container>
  );
}
