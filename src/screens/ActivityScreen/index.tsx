import React, { useEffect, useState } from 'react';
import { Container, Title, FilterButton, FilterText, AddButton, EmptyText, Row } from './styles';
import { FlatList, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PlusCircle } from 'phosphor-react-native';



const ActivityScreen = () => {

  const [filter, setFilter] = useState<'mine' | 'others'>('mine');
  const [myActivities, setMyActivities] = useState([]);
  const [otherActivities, setOtherActivities] = useState([]);
  
  const navigation = useNavigation();

  const handleAddActivity = () => {
    navigation.navigate('CreateActivityScreen');
  };

  const currentList = filter === 'mine' ? myActivities : otherActivities;

  const emptyMessage = filter === 'mine' ? 'Você ainda não criou nenhum serviço ou favor.' : 'Você ainda não marcou nenhum serviço ou favor de outros vizinhos.';

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
          renderItem={({ item }) => <ActivityCard data={item} />} //criar dps
        />
      )}


    </Container>
  );
};

export default ActivityScreen;