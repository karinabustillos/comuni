import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '@screens/LogInScreen';
import  ResetPasswordScreen from '@screens/ResetPasswordScreen';
import SignInScreen from '@screens/SignInScreen';
import { MainTabNavigator } from './MainTab';
import { AppStackParamList } from './types';
import { useAuth } from 'src/hooks/useAuth';
import YourEventsScreen from '@screens/YourEventsScreen';
import EventDetailScreen from '@screens/EventDetailScreen';

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
      <Stack.Screen name="YourEventsScreen" component={YourEventsScreen} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
    </Stack.Navigator>

  );
}


