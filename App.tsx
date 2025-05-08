import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Loading from '@components/Loading';

import theme from '@theme/index';

import SignInScreen from '@screens/SignInScreen'

export default function App() {
  const [fontsLoaded] = useFonts({Poppins_400Regular, Poppins_700Bold });


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <SignInScreen /> : <Loading /> }
    </ThemeProvider>
  );
}