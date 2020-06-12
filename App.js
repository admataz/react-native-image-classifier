import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TFCamera from './components/TFCamera'

export default function App() {
  return (
    <View style={styles.container}>
       <TFCamera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
