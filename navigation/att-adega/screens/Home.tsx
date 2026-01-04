import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <Text style={styles.titulo}>Adega Preferida</Text>
      <Text style={styles.subTitulo}>
        Aqui você encontra os melhores e mais saborosos vinhos.
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitulo: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
