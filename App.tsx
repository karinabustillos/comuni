import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Loading } from '@components/Loading';

import theme from '@theme/index';

import { Groups } from '@screens/Groups';
import { Tela2 } from '@screens/Tela2'
import Tela3 from '@screens/Tela3';

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

       <Tela3 />
       
    </ThemeProvider>
  );
}

/*
{fontsLoaded ? <Tela2 /> : <Loading /> }
*/