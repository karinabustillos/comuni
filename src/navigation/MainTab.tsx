import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { ExploreScreen } from '../screens/ExploreScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { House, List, MapPin, User } from 'phosphor-react-native';
import { MainTabParamList } from './types';
import { ActivityStackNavigator } from './ActivityStack';

const Tab = createBottomTabNavigator<MainTabParamList>();


export function MainTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'Home':
                return <House size={size} color={color} weight={focused ? "fill" : "regular"} />;
              case 'Explore':
                return <List size={size} color={color} weight={focused ? "fill" : "regular"} />;
              case 'Atividades':
                return <MapPin size={size} color={color} weight={focused ? "fill" : "regular"} />;
              case 'Configurações':
                return <User size={size} color={color} weight={focused ? "fill" : "regular"} />;
              default:
                return <House size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#205781',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            elevation: 0,
            height: 60,
            paddingBottom: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Atividades" component={ActivityStackNavigator} />
        <Tab.Screen name="Configurações" component={SettingsScreen} />
      </Tab.Navigator>
    ); 
  }