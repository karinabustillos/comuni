import React, { useEffect, useState } from 'react';
import { Container, Title, FilterButton, FilterText, AddButton, EmptyText, Row } from './styles';
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { PlusCircle } from 'phosphor-react-native';
import ActivityCard from '../../components/ActivityCard'; // Caminho ajustado
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../configFirebase/firebase';
import { useAuth } from '../../hooks/useAuth';
import { useCallback } from 'react';

const ActivityScreen = () => {
  const navigation = useNavigation();
  const { user, loading: authLoading } = useAuth();

  const [filter, setFilter] = useState<'mine' | 'others'>('mine');
  const [myActivities, setMyActivities] = useState<any[]>([]);
  const [otherActivities, setOtherActivities] = useState<any[]>([]);
  const [loadingActivities, setLoadingActivities] = useState(true);


  const appId = 'vizinhapp'; 

  // Função para navegar para a tela de detalhes
  const handleActivityPress = (eventId: string) => {
    navigation.navigate('ActivityDetailScreen', { eventId });
  };

  useFocusEffect(
    useCallback(() => {
      if (authLoading || !user) {
        setLoadingActivities(false); 
        return;
      }

      setLoadingActivities(true);
      const userActivitiesRef = collection(db, `artifacts/${appId}/users/${user.uid}/activities`);
      const q = query(userActivitiesRef);

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const activitiesData: any[] = [];
        snapshot.forEach((doc) => {
          activitiesData.push({ id: doc.id, ...doc.data() });
        });
        setMyActivities(activitiesData);
        setLoadingActivities(false);
      }, (error) => {
        console.error("Erro ao buscar atividades: ", error);
        setLoadingActivities(false);
      });

      return () => unsubscribe(); 
    }, [user, authLoading])
  );

  const handleAddActivity = () => {
    navigation.navigate('CreateActivityScreen');
  };

  const currentList = filter === 'mine' ? myActivities : otherActivities;

  const emptyMessage = filter === 'mine' ? 'Você ainda não criou nenhum serviço ou favor.' : 'Você ainda não marcou nenhum serviço ou favor de outros vizinhos.';

  if (authLoading || loadingActivities) {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#205781" />
      </Container>
    );
  }

  return (
    <Container>
      <Title>Suas Atividades</Title>

      <Row>
        <FilterButton active={filter === 'mine'} onPress={() => setFilter('mine')} style={{ marginRight: 8 }}>
          <FilterText>Por você</FilterText>
        </FilterButton>

        <FilterButton active={filter === 'others'} onPress={() => setFilter('others')}>
          <FilterText>Por outros</FilterText>
        </FilterButton>

        <AddButton onPress={handleAddActivity}>
          <PlusCircle size={50} color="#205781" />
        </AddButton>
      </Row>

      {currentList.length === 0 ? (
        <EmptyText>{emptyMessage}</EmptyText>
      ) : (
        <FlatList
          data={currentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ActivityCard data={item} onPress={handleActivityPress} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default ActivityScreen;
