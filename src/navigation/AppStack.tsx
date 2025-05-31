/*import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from '../screens/Onboarding';
import { Cadastro } from '../screens/Cadastro';
import { Login } from '../screens/Login';
import { MainTabNavigator } from './MainTab';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}*/

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '@screens/LogInScreen';
import  ResetPasswordScreen from '@screens/ResetPasswordScreen';
import SignInScreen from '@screens/SignInScreen';
import { MainTabNavigator } from './MainTab';
import { AppStackParamList } from './types';
import { useAuth } from 'src/hooks/useAuth';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {

  const { user } = useAuth();


  return (
    <Stack.Navigator
      initialRouteName={user ? 'Main' : 'SignInScreen'} //"Main"
      screenOptions={{
        headerShown: false,
      }}
    > 
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>

    
  );
}


