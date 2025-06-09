import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityStackParamList } from './types';
import ActivityScreen from '@screens/ActivityScreen';
import YourEventsScreen from '@screens/YourEventsScreen';
import EventDetailScreen from '@screens/EventDetailScreen';
import CreateActivityScreen from '@screens/CreateActivityScreen';

const Stack = createNativeStackNavigator<ActivityStackParamList>();

export function ActivityStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
      <Stack.Screen name="CreateActivityScreen" component={CreateActivityScreen} />
      <Stack.Screen name="YourEventsScreen" component={YourEventsScreen} /> 
      <Stack.Screen name="EventDetail" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}



