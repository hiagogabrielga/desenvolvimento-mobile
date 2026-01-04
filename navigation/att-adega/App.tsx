import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, BottleWine, BookUser } from "lucide-react-native";

import HomeScreen from "./screens/Home";
import CatalagoScreen from "./screens/Catalago";
import ContatoScreen from "./screens/Contato";
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#e0e6ff",
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 110,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            width: 100,
            height: 100,
            fontSize: 14,
            fontWeight: "bold",
            textAlign: "center",
          },
          tabBarActiveBackgroundColor: "#e0e6ff",
          tabBarInactiveBackgroundColor: "#fff",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",

          tabBarItemStyle: {
            padding: 5,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <Home size={20} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Catalogo"
          component={CatalagoScreen}
          options={{
            tabBarIcon: ({ color }) => <BottleWine size={20} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Contato"
          component={ContatoScreen}
          options={{
            tabBarIcon: ({ color }) => <BookUser size={20} color={color} />,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
