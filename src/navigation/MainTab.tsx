import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tela1 } from '../screens/Tela1';
import { Tela2 } from '../screens/Tela2';
import Tela3 from '../screens/Tela3';
import { Profile } from '../screens/Profile';
import { House, List, MapPin, User } from 'phosphor-react-native';
import { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();


export function MainTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'Tela1':
                return <House size={size} color={color} weight={focused ? "fill" : "regular"} />;
              case 'Tela2':
                return <List size={size} color={color} weight={focused ? "fill" : "regular"} />;
              case 'Tela3':
                return <MapPin size={size} color={color} weight={focused ? "fill" : "regular"} />;
              case 'Profile':
                return <User size={size} color={color} weight={focused ? "fill" : "regular"} />;
              default:
                return <House size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#4F959D',
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
        <Tab.Screen name="Tela1" component={Tela1} />
        <Tab.Screen name="Tela2" component={Tela2} />
        <Tab.Screen name="Tela3" component={Tela3} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  }