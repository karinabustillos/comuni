import React, { useEffect, useState } from 'react';
import { Alert, ActivityIndicator, TouchableOpacity } from 'react-native'; 
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { db } from '../../configFirebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth';
import { ActivityStackParamList } from '../../navigation/types'; 

import {
  Container,
  Title,
  Label,
  Input,
  SelectButton,
  SelectText,
  DescriptionInput,
  SubmitButton,
  SubmitButtonText,
  Row,
  GoBackButton,
} from './styles'; 

import { CaretLeft, CaretCircleDown } from 'phosphor-react-native';

type EditActivityRouteProp = RouteProp<ActivityStackParamList, 'EditActivityScreen'>;

const EditActivityScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<EditActivityRouteProp>();
  const { eventId } = route.params;
  const { user } = useAuth();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Favor');
  const [description, setDescription] = useState('');
  const [local, setLocal] = useState('');
  const [loading, setLoading] = useState(true);

  const appId = 'vizinhapp'; 

  useEffect(() => {
    const fetchActivity = async () => {
      if (!user || !eventId) {
        setLoading(false);
        return;
      }

      try {
        const activityDocRef = doc(db, `artifacts/${appId}/users/${user.uid}/activities`, eventId);
        const activityDoc = await getDoc(activityDocRef);

        if (activityDoc.exists()) {
          const data = activityDoc.data();
          setTitle(data.titulo);
          setCategory(data.categoria);
          setDescription(data.descricao);
          setLocal(data.local);
        } else {
          Alert.alert('Erro', 'Atividade não encontrada para edição.');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Erro ao buscar atividade para edição:', error);
        Alert.alert('Erro', 'Não foi possível carregar a atividade para edição. Tente novamente.');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [eventId, user, navigation]);

  const handleUpdateActivity = async () => {
    if (!user || !eventId) {
      Alert.alert('Erro', 'Você precisa estar logado e ter um ID de atividade para atualizar.');
      return;
    }

    if (!title.trim() || !description.trim() || !local.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha o título, descrição e local.');
      return;
    }

    try {
      const activityDocRef = doc(db, `artifacts/${appId}/users/${user.uid}/activities`, eventId);
      await updateDoc(activityDocRef, {
        titulo: title,
        categoria: category,
        descricao: description,
        local: local,
      });

      Alert.alert('Sucesso', 'Atividade atualizada com sucesso!');
      navigation.goBack(); 
    } catch (error) {
      console.error('Erro ao atualizar atividade:', error);
      Alert.alert('Erro', 'Não foi possível atualizar a atividade. Tente novamente.');
    }
  };

  const toggleCategory = () => {
    setCategory(prev => prev === 'Favor' ? 'Serviços' : 'Favor');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (loading) {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#205781" />
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <GoBackButton onPress={handleGoBack}>
          <CaretLeft size={40} color="#205781" />
        </GoBackButton>

        <Title>Editar Atividade</Title>
      </Row>

      <Label>Título</Label>
      <Input
        placeholder="Descreva brevemente a sua atividade"
        value={title}
        onChangeText={setTitle}
      />

      <Label>Categoria</Label>
      <SelectButton onPress={toggleCategory}>
        <SelectText>{category}</SelectText>
        <CaretCircleDown size={20} color="#205781" />
      </SelectButton>

      <Label>Local</Label>
      <Input
        placeholder="Ex: Rua das Flores, 123"
        value={local}
        onChangeText={setLocal}
      />

      <Label>Descrição</Label>
      <DescriptionInput
        placeholder="Forneça mais detalhes sobre o serviço ou favor..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <SubmitButton onPress={handleUpdateActivity}>
        <SubmitButtonText>Salvar Alterações</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default EditActivityScreen;
