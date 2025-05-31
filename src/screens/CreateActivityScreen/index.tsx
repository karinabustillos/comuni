import React, { useState } from 'react';
import { Container, Title, Label, Input, SelectButton, SelectText, DescriptionInput, SubmitButton, SubmitButtonText, Row,  GoBackButton } from './styles';
import { useNavigation } from '@react-navigation/native';
import { CaretLeft,CaretCircleDown } from 'phosphor-react-native';
import { Button, TouchableOpacity } from 'react-native';

const CreateActivityScreen = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Favor');
  const [description, setDescription] = useState('');

  const handleCreateActivity = () => {
    //lógica de criação de atividade
    console.log('Criar:', { title, category, description });
    navigation.goBack();
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

/*
<Button title="Voltar" onPress={() => navigation.goBack()} />
      <Title>Criar atividade</Title>

      <Label>Título</Label>
      <Input
        placeholder="Digite um título que descreva a sua atividade"
        value={title}
        onChangeText={setTitle}
      />

      <Label>Categoria</Label>
      <TouchableOpacity>
        <SelectButton>
          <SelectText>{category}</SelectText>
          <CaretLeft size={20} color="#000" />
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
        <SubmitButtonText>Criar atividade</SubmitButtonText>
      </SubmitButton>




*/
