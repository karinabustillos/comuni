import { useState } from 'react';
import { Alert } from 'react-native';
import { 
  User, 
  Bell, 
  Moon, 
  Lock, 
  Question, 
  CaretRight, 
  ToggleLeft, 
  ToggleRight 
} from 'phosphor-react-native';
import { Container, Header, UserInfo, Avatar, UserName, UserEmail, SettingsSection, SectionTitle, Option, OptionText, OptionIcon, LogoutButton, LogoutButtonText, VersionText } from './styles';

import logoImg from '@assets/pre-logo.png';
//import { useAuth } from '@hooks/auth';

export function Profile() {
 // const { user, signOut } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Deseja realmente sair da aplicação?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sair',
    //      onPress: () => signOut()
        }
      ]
    );
  };

  return (
    <Container>
      <Header>
        <UserInfo>
          <Avatar 
         //   source={user.avatar ? { uri: user.avatar } : avatarPlaceholder}
          />
          <UserName>Usuário{}</UserName>
          <UserEmail>usuario@gmail.com{}</UserEmail>
        </UserInfo>
      </Header>

      <SettingsSection>
        <SectionTitle>Configurações</SectionTitle>
        
        <Option onPress={() => {}}>
          <OptionIcon as={User} weight="regular" />
          <OptionText>Editar Perfil</OptionText>
          <OptionIcon as={CaretRight} weight="bold" />
        </Option>
        
        <Option onPress={() => setNotificationsEnabled(!notificationsEnabled)}>
          <OptionIcon as={Bell} weight="regular" />
          <OptionText>Notificações</OptionText>
          {notificationsEnabled ? (
            <OptionIcon as={ToggleRight} weight="bold" color="#4CAF50" />
          ) : (
            <OptionIcon as={ToggleLeft} weight="bold" color="#9E9E9E" />
          )}
        </Option>
        
        <Option onPress={() => setDarkModeEnabled(!darkModeEnabled)}>
          <OptionIcon as={Moon} weight="regular" />
          <OptionText>Modo Escuro</OptionText>
          {darkModeEnabled ? (
            <OptionIcon as={ToggleRight} weight="bold" color="#4CAF50" />
          ) : (
            <OptionIcon as={ToggleLeft} weight="bold" color="#9E9E9E" />
          )}
        </Option>
        
        <Option onPress={() => {}}>
          <OptionIcon as={Lock} weight="regular" />
          <OptionText>Segurança</OptionText>
          <OptionIcon as={CaretRight} weight="bold" />
        </Option>
        
        <Option onPress={() => {}}>
          <OptionIcon as={Question} weight="regular" />
          <OptionText>Ajuda</OptionText>
          <OptionIcon as={CaretRight} weight="bold" />
        </Option>
      </SettingsSection>

      <LogoutButton onPress={handleLogout}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>

      <VersionText>Versão 1.0.0</VersionText>
    </Container>
  );
}