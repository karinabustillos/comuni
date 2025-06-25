import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/types';
import { Container, Title, Highlight, SubTitle, Card, CardTitle, CardText } from './styles';

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <Container contentContainerStyle={{ paddingBottom: 80 }}>
      <Title>Bem-vindo ao <Highlight>Comuni!</Highlight></Title>
      <SubTitle>Sua vizinhança</SubTitle>

      <Card>
        <CardTitle>Eventos</CardTitle>
        <CardText>fique atento a eventos, exposições e festividades na região</CardText>
      </Card>

      <Card onPress={() => navigation.navigate('YourEventsScreen')}>
        <CardTitle>Meus Eventos</CardTitle>
        <CardText>veja eventos que você criou ou confirmou presença</CardText>
      </Card>
    </Container>
  );
}
