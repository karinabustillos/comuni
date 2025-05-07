import { Container, TabButton, TabText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; // Importa os ícones

export function BottomTabMenu() {
  const navigation = useNavigation<any>(); // ajuste para o tipo de navigation correto se você usar types

  return (
    <Container>
      <TabButton onPress={() => navigation.navigate('home')}>
        <Feather name="home" size={24} color="#000" />
        <TabText>Home</TabText>
      </TabButton>

      <TabButton onPress={() => navigation.navigate('groups')}>
        <Feather name="users" size={24} color="#000" />
        <TabText>Groups</TabText>
      </TabButton>

      <TabButton onPress={() => navigation.navigate('profile')}>
        <Feather name="user" size={24} color="#000" />
        <TabText>Profile</TabText>
      </TabButton>

      <TabButton onPress={() => navigation.navigate('settings')}>
        <Feather name="settings" size={24} color="#000" />
        <TabText>Settings</TabText>
      </TabButton>
    </Container>
  );
}
