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
import { MainTabNavigator } from './MainTab';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    > 
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}


