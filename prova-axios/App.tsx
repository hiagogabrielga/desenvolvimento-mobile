import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreens from "./screens/Home";
import CalculadoraScreens from "./screens/calculadora";
import ProprietariosScreens from "./screens/proprietarios";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreens} options={{drawerIcon:() => <MaterialIcons name="home" size={24} color="black" />}}/>
        <Drawer.Screen name="Calculadora" component={CalculadoraScreens} options={{drawerIcon:() => <AntDesign name="calculator" size={24} color="black" />}}/>
        <Drawer.Screen name="Proprietários" component={ProprietariosScreens} options={{drawerIcon:() => <MaterialCommunityIcons name="human-queue" size={24} color="black" />}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
