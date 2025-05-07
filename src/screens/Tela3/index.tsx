import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Header } from '@components/Header';
import { SearchBar } from '@components/SearchBar';
import { MapComponent } from '@components/MapComponent'; 

const Tela3 = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <MapComponent />
    </Container>
  );
};

export default Tela3;