import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivityScreen from '../screens/ActivityScreen';
import CreateActivityScreen from '../screens/CreateActivityScreen';
import { ActivityStackParamList } from './types';

const Stack = createNativeStackNavigator<ActivityStackParamList>();

export function ActivityStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
      <Stack.Screen name="CreateActivityScreen" component={CreateActivityScreen} />
    </Stack.Navigator>
  );
}



