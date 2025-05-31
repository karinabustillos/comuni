import { StatusBar } from 'react-native';
import { Routes } from './src/navigation';


import { ThemeProvider } from 'styled-components/native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Loading } from '@components/Loading';

import theme from '@theme/index';


export default function App() {
  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_700Bold });

  //{fontsLoaded ? <Tela2 /> : <Loading /> }
  //console.log('Cores do tema:', theme.COLORS);
  //console.log('Fontes carregadas:', fontsLoaded);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />

       
    </ThemeProvider>
  );
}

/*
{fontsLoaded ? <Tela2 /> : <Loading /> }
*/