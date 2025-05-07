import React, { useState } from 'react';
import { Container, ButtonsContainer, CardsContainer } from './styles';
import { FilterButton } from '../FilterButton';
import { CardItem } from '../CardItem';

export function Flatlist() {

    type Category = 'servicos' | 'favores' | 'eventos';
    const [selectedCategory, setSelectedCategory] = useState<Category>('servicos');

    const items = {
        servicos: ['Serviço X', 'Serviço Y', 'Serviço Z'],
        favores: ['Favor A', 'Favor B', 'Favor C'],
        eventos: ['Evento 1', 'Evento 2', 'Evento 3']
    };

    return (
        <Container>
        <ButtonsContainer>
            <FilterButton
            title="Serviços"
            isActive={selectedCategory === 'servicos'}
            onPress={() => setSelectedCategory('servicos')}
            />
            <FilterButton
            title="Favores"
            isActive={selectedCategory === 'favores'}
            onPress={() => setSelectedCategory('favores')}
            />
            <FilterButton
            title="Eventos"
            isActive={selectedCategory === 'eventos'}
            onPress={() => setSelectedCategory('eventos')}
            />
        </ButtonsContainer>

        <CardsContainer>
            {items[selectedCategory].map((item, index) => (
            <CardItem key={index} title={item} />
            ))}
        </CardsContainer>
        </Container>
    );
}
