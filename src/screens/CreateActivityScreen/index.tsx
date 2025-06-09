import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Favor');
  const [description, setDescription] = useState('');

  const handleCreateActivity = async () => {
    const user = auth().currentUser;

    if (!user) {
      Alert.alert('Erro', 'Você precisa estar logado para criar uma atividade.');
      return;
    }

    if (!title.trim() || !description.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha o título e a descrição.');
      return;
    }

    try {
      await firestore().collection('events').add({
        titulo: title,
        categoria: category,
        descricao: description,
        data: new Date().toISOString(), // ou selecione data no form depois
        local: 'Local não informado',   // você pode adicionar um campo de input se quiser
        userId: user.uid,
      });

      Alert.alert('Sucesso', 'Atividade criada com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar atividade:', error);
      Alert.alert('Erro', 'Não foi possível criar a atividade.');
    }
  };

  const toggleCategory = () => {
    setCategory(prev => prev === 'Favor' ? 'Serviços' : 'Favor');
  };

  return (
    <Container>
      <Row>
        <GoBackButton onPress={handleCreateActivity} >
          <CaretLeft size={40} color="#205781" />
        </GoBackButton>
        
        <Title>Criar Atividade</Title>
      </Row>
        
        <Label>Título</Label>
        <Input
          placeholder="Digite um título que descreva a sua atividade"
          value={title}
          onChangeText={setTitle}
        />

        <Label>Categoria</Label>
        <TouchableOpacity  onPress={toggleCategory}>
          <SelectButton>
            <SelectText>{category}</SelectText>
            <CaretCircleDown size={20} color="#205781" />
          </SelectButton>
        </TouchableOpacity>

        <Label>Descrição</Label>
        <DescriptionInput
          placeholder="Digite a descrição da atividade."
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <SubmitButton onPress={handleCreateActivity}>
          <SubmitButtonText>Criar</SubmitButtonText>
        </SubmitButton>
        
      
    </Container>
  );
};

export default CreateActivityScreen;
