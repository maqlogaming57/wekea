import React from 'react';
import { PaperProvider } from 'react-native-paper';
import CustomSafeArea from './src/components/CustomSafeArea';
import Routes from './src/routes';

export default function App() {
  return (
    <CustomSafeArea>
      <PaperProvider>
      <Routes />
      </PaperProvider>
    </CustomSafeArea>
  );
}
