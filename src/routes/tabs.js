import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import HomeScreen from '../views/screens/home/HomeScreen';
import FavoriteScreen from '../views/screens/home/FavoriteScreen';

const Tabs = createBottomTabNavigator();
export default function HomeTabs() {
  return (
    <Tabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'tomato',
        padding: 10,
      },
    }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => ( <Ionicons name="home" size={24} color="black" />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
        <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => ( <Ionicons name="home" size={24} color="black" />
          ),
        }}
        name="Favorite"
        component={FavoriteScreen}
        />
    </Tabs.Navigator>
  );
}
