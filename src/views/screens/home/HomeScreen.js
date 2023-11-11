import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  useWindowDimensions,
  Image,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';

import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    gap: 10,
    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
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
  const { width } = useWindowDimensions(); // dinamis layar Carousel

  const dataCarousel = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.searchBar, styles.borderShadow]}>
          <Ionicons name="search" size={12} />
          <TextInput placeholder="Mau cari barang apa?" />
        </View>
        <IconButton icon="menu" />
      </View>
      <View style={{ flex: 1 }}>
        <Carousel
          loop
          width={width}
          height={200}
          autoPlay
          data={dataCarousel}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item }) => (
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri: item.imageUrl,
              }}
            />
          )}
        />
      </View>
    </>
  );
}
