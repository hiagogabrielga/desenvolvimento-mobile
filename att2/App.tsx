import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCont] = useState(1)
  const [countTen, setCountTen] = useState(10)
  const [countHund, setCountHund] = useState(100)

  function cutucada() {
    console.log("botão apertado")
    setCont(val => val + 1)
    setCountTen(val => val + 10)
    setCountHund(val => val + 100)
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Cutuque o butão' onPress={cutucada}></Button>
      <Text>Contador 1: {count}</Text>
      <Text>Contador 10: {countTen}</Text>
      <Text>Contador 100: {countHund}</Text>
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
