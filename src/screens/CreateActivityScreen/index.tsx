import React, { useState } from 'react';
import { Alert } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { db } from '../../configFirebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth';

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

const CreateActivityScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Favor');
  const [description, setDescription] = useState('');
  const [local, setLocal] = useState(''); // Novo campo para local

  const appId = 'vizinhapp'; 

  const handleCreateActivity = async () => {
    if (!user) {
      Alert.alert('Erro', 'Você precisa estar logado para criar uma atividade.');
      return;
    }

    if (!title.trim() || !description.trim() || !local.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha o título, descrição e local.');
      return;
    }

    try {
      // Caminho da coleção ajustado para dados privados do usuário
      const activitiesCollectionRef = collection(db, `artifacts/${appId}/users/${user.uid}/activities`);

      await addDoc(activitiesCollectionRef, {
        titulo: title,
        categoria: category,
        descricao: description,
        data: serverTimestamp(), // Usa o timestamp do servidor para a data
        local: local,
        userId: user.uid,
      });

      Alert.alert('Sucesso', 'Atividade criada com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar atividade:', error);
      Alert.alert('Erro', 'Não foi possível criar a atividade. Tente novamente.');
    }
  };

  const toggleCategory = () => {
    setCategory(prev => prev === 'Favor' ? 'Serviços' : 'Favor');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Row>
        <GoBackButton onPress={handleGoBack}>
          <CaretLeft size={40} color="#205781" />
        </GoBackButton>

        <Title>Criar Atividade</Title>
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

      <SubmitButton onPress={handleCreateActivity}>
        <SubmitButtonText>Criar Atividade</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default CreateActivityScreen;
