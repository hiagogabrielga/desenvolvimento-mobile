import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function CatalagoScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, width: '80%', margin: 40}}>Entre em contato conosco para comprar nossos produtos</Text>
      <View style={styles.lista}>
        <View style={styles.card}>
          <FontAwesome name="phone" size={24} color="black" />
          <Text style={{fontWeight: 'bold'}}>Telefone</Text>
          <Text style={{textAlign: 'center'}}>+55 (69) 98432-7406</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome name="map-marker" size={24} color="black" />
          <Text style={{fontWeight: 'bold'}}>Endereço</Text>
          <Text style={{textAlign: 'center'}}>Rua: Sebastião Batista, Vilhena, RO</Text>
        </View>
        <View style={styles.card}>
          <MaterialIcons name="email" size={24} color="black" />
          <Text style={{fontWeight: 'bold'}}>Email</Text>
          <Text style={{textAlign: 'center'}}>hiagogabriel1132@gmail.com</Text>
        </View>
        <View style={styles.card}>
          <Ionicons name="logo-instagram" size={24} color="black" />
          <Text style={{fontWeight: 'bold'}}>Instagram</Text>
          <Text style={{textAlign: 'center'}}>@hiago.gabriel.g.andre</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  lista: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  card: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    fontSize: 20,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#e0e6ff",
  },
});
