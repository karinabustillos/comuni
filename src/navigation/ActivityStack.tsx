import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityStackParamList } from './types';
import ActivityScreen from '@screens/ActivityScreen';
import YourEventsScreen from '@screens/YourEventsScreen';
import EventDetailScreen from '@screens/EventDetailScreen';
import CreateActivityScreen from '@screens/CreateActivityScreen';
import EventsScreen from '@screens/EventsScreen';
import ActivityDetailScreen from '@screens/ActivityDetailScreen';
import EditActivityScreen from '@screens/EditActivityScreen';

const Stack = createNativeStackNavigator<ActivityStackParamList>();

export function ActivityStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
      <Stack.Screen name="CreateActivityScreen" component={CreateActivityScreen} />
      <Stack.Screen name="ActivityDetailScreen" component={ActivityDetailScreen} />
      <Stack.Screen name="EditActivityScreen" component={EditActivityScreen} />

    </Stack.Navigator>
  );
}


