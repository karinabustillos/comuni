import React, { useState, useRef } from "react";
import {
  Modal,
  Alert,
  FlatList,
  Platform,
  Keyboard, 
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedbac,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PlusCircle, CaretLeft } from "phosphor-react-native";

import { AppStackParamList } from "../../navigation/types";
import { 
  Row,
  Title,
  AddButton,
  ButtonRow,
  EventCard,
  Container,
  ModalCard,
  ModalTitle,
  InputField,
  ModalButton,
  EventCardText,
  ModalContainer,
  ModalButtonText,} from "./styles";
import ListEmpty from "@components/ListEmpty";

//* Definição do tipo de navegação
type YourEventsNavigationProp = NativeStackNavigationProp<AppStackParamList, "YourEvents">;

//* Interface para um evento simples
interface Event {
  id: string;
  name: string;
  description: string;
  datetime: string;
  location: string;
}

export default function YourEventsScreen() {
  const navigation = useNavigation<YourEventsNavigationProp>();

  //* 1) Estado para armazenar a lista de eventos
  const [events, setEvents] = useState<Event[]>([]);

  //* 2) Estado para controlar a visibilidade do modal “Criar Evento”
  const [modalVisible, setModalVisible] = useState(false);

  //* 3) Estados para controlar cada campo do formulário dentro do modal
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");
  const [location, setLocation] = useState("");

  //* 4) Refs para definir foco no primeiro TextInput do modal 
  const nameInputRef = useRef<TextInput>(null);

  //* Função para abrir o Modal e focar o campo “Nome do evento”
  const openCreateModal = () => {
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);
    setModalVisible(true);
  };

  //* Função para fechar o modal, limpando campos
  const closeCreateModal = () => {
    setName("");
    setDescription("");
    setDatetime("");
    setLocation("");
    setModalVisible(false);
  };

  //* Função que é chamada quando o usuário clica em “Criar”
  const handleCreateEvent = () => {
    if (!name.trim() || !description.trim() || !datetime.trim() || !location.trim()) {
      Alert.alert("Atenção", "Todos os campos são obrigatórios.");
      return;
    }

    const newEvent: Event = {
      id: Math.random().toString(36).substr(2, 9), //* ID simples
      name: name.trim(),
      description: description.trim(),
      datetime: datetime.trim(),
      location: location.trim(),
    };

    setEvents((old) => [...old, newEvent]);
    closeCreateModal();
  };

  //* Função para navegar à tela de detalhe, passando o ID do evento
  const handleOpenDetail = (eventId: string) => {
    navigation.navigate("EventDetail", { eventId });
  };

  //* Render de cada evento na lista
  const renderEventItem = ({ item }: { item: Event }) => (
    <TouchableOpacity onPress={() => handleOpenDetail(item.id)}>
      <EventCard>
        <EventCardText>{item.name}</EventCardText>
      </EventCard>
    </TouchableOpacity>
  );

  return (
    <Container>
      {/* Header com botão “Voltar” */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <CaretLeft size={28} color="#205781" />
      </TouchableOpacity>

      <Row>
        <Title>Seus Eventos</Title>
        <AddButton onPress={openCreateModal}>
          <PlusCircle size={28} color="#205781" />
        </AddButton>
      </Row>

      {events.length === 0 ? (
        <ListEmpty message="Você não tem nenhum evento." />
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={renderEventItem}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      )}

      {/*  ———————— Modal “Criar Evento” ———————— */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ModalContainer>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
              <ModalCard>
                <ModalTitle>Criar evento</ModalTitle>

                <InputField
                  ref={nameInputRef}
                  placeholder="Nome do evento"
                  value={name}
                  onChangeText={setName}
                  returnKeyType="next"
                  onSubmitEditing={() => descriptionInputRef.current?.focus()}
                />
                <InputField
                  ref={descriptionInputRef}
                  placeholder="Descrição do evento"
                  value={description}
                  onChangeText={setDescription}
                  returnKeyType="next"
                  onSubmitEditing={() => datetimeInputRef.current?.focus()}
                />
                <InputField
                  ref={datetimeInputRef}
                  placeholder="Data e Hora"
                  value={datetime}
                  onChangeText={setDatetime}
                  returnKeyType="next"
                  onSubmitEditing={() => locationInputRef.current?.focus()}
                />
                <InputField
                  ref={locationInputRef}
                  placeholder="Local"
                  value={location}
                  onChangeText={setLocation}
                  returnKeyType="done"
                  onSubmitEditing={handleCreateEvent}
                />

                <ButtonRow>
                  <ModalButton type="cancel" onPress={closeCreateModal}>
                    <ModalButtonText>Cancelar</ModalButtonText>
                  </ModalButton>
                  <ModalButton type="confirm" onPress={handleCreateEvent}>
                    <ModalButtonText>Criar</ModalButtonText>
                  </ModalButton>
                </ButtonRow>
              </ModalCard>
            </KeyboardAvoidingView>
          </ModalContainer>
        </TouchableWithoutFeedback>
      </Modal>
    </Container>
  );
}
