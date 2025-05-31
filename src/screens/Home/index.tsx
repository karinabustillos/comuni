import { MapComponent } from '@components/MapComponent';
import { Container, Title, Highlight, SubTitle, Card, CardTitle, CardText } from './styles';


export function Home() {
  return (
    <Container contentContainerStyle={{ paddingBottom: 80 }}>
      <Title>Bem-vindo ao <Highlight> Comuni!</Highlight></Title>
      <SubTitle>Sua vizinhança</SubTitle>
      
      <MapComponent />

      <Card>
        <CardTitle>Eventos</CardTitle>
        <CardText>fique atento a eventos, exposições e festividades na região</CardText>
      </Card>

      <Card>
        <CardTitle>Mural</CardTitle>
        <CardText>compartilhe e conecte com vizinhos através de posts na comunidade</CardText>
      </Card>

      <Card>
         <CardTitle>Exemplo</CardTitle>
        <CardText>xxx</CardText>
      </Card>
      
      <Card>
         <CardTitle>Exemplo</CardTitle>
        <CardText>xxx</CardText>
      </Card>
      
      <Card>
         <CardTitle>Exemplo</CardTitle>
        <CardText>xxx</CardText>
      </Card>
    
    </Container>
  );
}

