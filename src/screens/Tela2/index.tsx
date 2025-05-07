import { BottomTabMenu } from '@components/BottomTabMenu';
import { Container } from './styles';

import { Header } from '@components/Header';
import {SearchBar} from '@components/SearchBar';
import { Flatlist } from '@components/Flatlist';

export function Tela2() {
  return (
    <Container>
      <Header/>
      
      <SearchBar/>


      <Flatlist/>
    </Container>
  );
}

