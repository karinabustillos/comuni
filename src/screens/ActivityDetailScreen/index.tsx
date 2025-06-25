import React, { useEffect, useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native'; 
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { db } from '../../configFirebase/firebase';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth';
import { ActivityStackParamList } from '../../navigation/types';

import {
  Container,
  Title,
  Label,
  DescriptionText,
  DetailText,
  ButtonRow,
  ActionButton,
  ActionButtonText,
  GoBackButton,
  Row,
  EmptyText,
} from './styles';

import { CaretLeft, PencilSimple, Trash } from 'phosphor-react-native';

type ActivityDetailRouteProp = RouteProp<ActivityStackParamList, 'ActivityDetailScreen'>;

const ActivityDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<ActivityDetailRouteProp>();
  const { eventId } = route.params;
  const { user } = useAuth();

  const [activity, setActivity] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Definindo um appId para a estrutura do Firestore
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
          setActivity({ id: activityDoc.id, ...activityDoc.data() });
        } else {
          Alert.alert('Erro', 'Atividade não encontrada.');
          navigation.goBack();
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes da atividade:', error);
        Alert.alert('Erro', 'Não foi possível carregar os detalhes da atividade.');
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, [eventId, user, navigation]);

  const handleDeleteActivity = async () => {
    if (!user || !eventId) {
      Alert.alert('Erro', 'Não foi possível deletar a atividade. Usuário não logado ou ID ausente.');
      return;
    }

    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja deletar esta atividade?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: async () => {
            try {
              const activityDocRef = doc(db, `artifacts/${appId}/users/${user.uid}/activities`, eventId);
              await deleteDoc(activityDocRef);
              Alert.alert('Sucesso', 'Atividade deletada com sucesso!');
              navigation.goBack(); // Volta para a lista de atividades
            } catch (error) {
              console.error('Erro ao deletar atividade:', error);
              Alert.alert('Erro', 'Não foi possível deletar a atividade. Tente novamente.');
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleEditActivity = () => {
    navigation.navigate('EditActivityScreen', { eventId }); // Navega para a tela de edição
  };

  if (loading) {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#205781" />
      </Container>
    );
  }

  if (!activity) {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <EmptyText>Atividade não encontrada.</EmptyText>
        <GoBackButton onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
            <CaretLeft size={40} color="#205781" />
            <ActionButtonText style={{ color: '#205781', fontSize: 16 }}>Voltar</ActionButtonText>
        </GoBackButton>
      </Container>
    );
  }

  const formattedDate = activity.data?.toDate ? activity.data.toDate().toLocaleDateString('pt-BR') : 'Data não informada';

  return (
    <Container>
      <Row>
        <GoBackButton onPress={() => navigation.goBack()}>
          <CaretLeft size={40} color="#205781" />
        </GoBackButton>
        <Title>Detalhes da Atividade</Title>
      </Row>

      <Label>Título:</Label>
      <DetailText>{activity.titulo}</DetailText>

      <Label>Categoria:</Label>
      <DetailText>{activity.categoria}</DetailText>

      <Label>Local:</Label>
      <DetailText>{activity.local}</DetailText>

      <Label>Descrição:</Label>
      <DescriptionText>{activity.descricao}</DescriptionText>

      <Label>Criado em:</Label>
      <DetailText>{formattedDate}</DetailText>

      <ButtonRow>
        <ActionButton onPress={handleEditActivity} style={{ backgroundColor: '#4CAF50' }}>
          <PencilSimple size={20} color="#FFF" />
          <ActionButtonText>Alterar</ActionButtonText>
        </ActionButton>

        <ActionButton onPress={handleDeleteActivity} style={{ backgroundColor: '#F44336' }}>
          <Trash size={20} color="#FFF" />
          <ActionButtonText>Deletar</ActionButtonText>
        </ActionButton>
      </ButtonRow>
    </Container>
  );
};

export default ActivityDetailScreen;
