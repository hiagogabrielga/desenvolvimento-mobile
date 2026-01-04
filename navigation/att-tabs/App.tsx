import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Home from "./components/home"
import Telas from "./components/telas"
import Rotas from "./components/rotas"
import Bibliotecas from "./components/bibliotecas"
import { Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Início" component={Home} options={{ tabBarIcon: () => <Feather name='home' color={"Blue"} size={30} />, }} />
        <Tabs.Screen name="Telas" component={Telas} options={{ tabBarIcon: () => <Feather name='monitor' color={"Blue"} size={30} />, }} />
        <Tabs.Screen name="Rotas" component={Rotas} options={{ tabBarIcon: () => <Feather name='compass' color={"Blue"} size={30} />, }} />
        <Tabs.Screen name="Bibliotecas" component={Bibliotecas} options={{ tabBarIcon: () => <Feather name='book-open' color={"Blue"} size={30} />, }} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subContainer: {
    margin: 'auto',
    width: "100%", 
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    width: "100%",
    marginTop: 15,
  },
  titles: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})