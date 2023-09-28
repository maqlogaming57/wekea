import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native';
import React from 'react';
import CustomSafeArea from './src/components/CustomSafeArea';
import Routes from './src/routes';

export default function App() {
  return (
    <CustomSafeArea>
      <Routes />
    </CustomSafeArea>
  );
}