import { SafeAreaView } from 'react-native';
import React from 'react';
import GlobalStyles from '../style/GlobalStyles';

export default function CustomSafeArea({ children }) {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaStyles}>{ children }</SafeAreaView>
  );
}
