// src/screens/EventDetailScreen/index.tsx
import React, { useState, useEffect } from "react";
import {Text, Alert, TextInput } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/types";

import { Container, DetailTitle, DetailText, ButtonRow, DetailButton } from "./styles";

type EventDetailRouteProp = RouteProp<AppStackParamList, "EventDetail">;
type EventDetailNavigationProp = NativeStackNavigationProp<AppStackParamList, "EventDetail">;

interface Event {
  id: string;
  name: string;
  description: string;
  datetime: string;
  location: string;
}

export default function EventDetailScreen() {
  const navigation = useNavigation<EventDetailNavigationProp>();
  const route = useRoute<EventDetailRouteProp>();
  const { eventId } = route.params;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const allEvents: Event[] = [
      {
        id: "abc123",
        name: "Feira de quarta",
        description: "Feira de frutas e outros produtos gerais",
        datetime: "11/05 às 07:30",
        location: "Rua X, a partir da esquina da casa de n. 224",
      },
    ];
    const found = allEvents.find((e) => e.id === eventId) || null;
    setEvent(found);
  }, [eventId]);

  const [name, setName] = useState(event?.name || "");
  const [description, setDescription] = useState(event?.description || "");
  const [datetime, setDatetime] = useState(event?.datetime || "");
  const [location, setLocation] = useState(event?.location || "");

  const handleUpdate = () => {
    if (!name.trim() || !description.trim() || !datetime.trim() || !location.trim()) {
      Alert.alert("Atenção", "Todos os campos são obrigatórios.");
      return;
    }

    Alert.alert("Sucesso", "Evento alterado com sucesso!");
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert("Confirmação", "Deseja realmente deletar este evento?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Deletar",
        style: "destructive",
        onPress: () => {
          Alert.alert("Sucesso", "Evento removido!");
          navigation.goBack();
        },
      },
    ]);
  };

  if (!event) {
    return (
      <Container>
        <Text>Evento não encontrado.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <DetailTitle>{name}</DetailTitle>

      <DetailText>Descrição</DetailText>
      <TextInput
        style={{ borderWidth: 1, borderColor: "#CCC", padding: 8, marginBottom: 12 }}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <DetailText>Data</DetailText>
      <TextInput
        style={{ borderWidth: 1, borderColor: "#CCC", padding: 8, marginBottom: 12 }}
        value={datetime}
        onChangeText={setDatetime}
      />

      <DetailText>Local</DetailText>
      <TextInput
        style={{ borderWidth: 1, borderColor: "#CCC", padding: 8, marginBottom: 12 }}
        value={location}
        onChangeText={setLocation}
      />

      <ButtonRow>
        <DetailButton type="update" onPress={handleUpdate}>
          <DetailButton.Text>Alterar</DetailButton.Text>
        </DetailButton>
        <DetailButton type="delete" onPress={handleDelete}>
          <DetailButton.Text>Deletar</DetailButton.Text>
        </DetailButton>
      </ButtonRow>
    </Container>
  );
}
