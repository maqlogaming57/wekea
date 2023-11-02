import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    marginHorizontal: 5,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 2,
    shadowColor: 'gray',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRAdius: 2,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: '#f5f5f5',
  },
});
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, styles.borderShadow]}>
        <Ionicons name="search" size={12} />
        <TextInput placeholder="Mau cari barang apa?" />
      </View>
    </View>
  );
}
