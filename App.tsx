import { StatusBar } from 'react-native';
import { Routes } from './src/navigation';


import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Loading } from '@components/Loading';
import { AuthProvider } from "./src/hooks/useAuth";

import theme from '@theme/index';

import { Groups } from '@screens/Groups';
import { Tela2 } from '@screens/Tela2'
import Tela3 from '@screens/Tela3';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  //{fontsLoaded ? <Tela2 /> : <Loading /> }
  //console.log('Cores do tema:', theme.COLORS);
  //console.log('Fontes carregadas:', fontsLoaded);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

          <Routes />

      </ThemeProvider>
    </AuthProvider>
  );
}

/*
{fontsLoaded ? <Tela2 /> : <Loading /> }
*/