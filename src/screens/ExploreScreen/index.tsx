import { BottomTabMenu } from '@components/BottomTabMenu';
import { Container, Title, FilterButton, FilterText, EmptyText, Row } from './styles';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity  } from 'react-native';


import { Header } from '@components/Header';
import {SearchBar} from '@components/SearchBar';
import { Flatlist } from '@components/Flatlist';

export function ExploreScreen() {
  const [filter, setFilter] = useState<'services' | 'favors'>('services');
  const [myActivities, setMyActivities] = useState([]);
  const [otherActivities, setOtherActivities] = useState([]);
  
  const navigation = useNavigation();

  const handleAddActivity = () => {
    //navigation.navigate('CreateActivity');
  };

  const currentList = filter === 'services' ? myActivities : otherActivities;

  const emptyMessage = filter === 'services' ? 'Ainda não há serviços na sua vizinhança.' : 'Ainda não há favores na sua vizinhança.';


  
  return (
    <Container>
      <Title>Procure por perto...</Title>

      <Row>
        <FilterButton active={filter === 'services'} onPress={() => setFilter('services')} style={{ marginRight: 8 }}>
          <FilterText>Serviços</FilterText>
        </FilterButton>

        <FilterButton active={filter === 'favors'} onPress={() => setFilter('favors')}>
          <FilterText>Favores</FilterText>
        </FilterButton>

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
}

