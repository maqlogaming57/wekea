import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView 
      style={{
        flex:1,
    }}
    >
    <View 
      style={{
        backgroundColor:"#F24C3D",
        padding:20,
        flex:1,
    }}
    >
      <Text
        style={{
          color:"#FFF"
        }}
      >Header</Text>
      </View>
    <View style={{
      backgroundColor:"#22A669",
      padding:20,
      flex:5,
    }}>
      <Text 
        style={{
          color:"#fff",
      }}>Content</Text>
    </View>
    </SafeAreaView>
  )
}