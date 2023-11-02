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
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 50,
      },
    }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
          <Ionicons
          name={
            focused ? 'home' : 'home-outline'
          }
          size={size}
          color={color}
          />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
        <Tabs.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
          <Ionicons
          name={
            focused ? 'heart' : 'heart-outline'
          }
          size={size}
          color={color}
          />
          ),
        }}
        name="Favorite"
        component={FavoriteScreen}
        />
    </Tabs.Navigator>
  );
}
