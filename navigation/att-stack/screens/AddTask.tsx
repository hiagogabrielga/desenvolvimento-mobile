import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type RouteProps = RouteProp<RootStackParamList, "Add">;
type NavProps = StackNavigationProp<RootStackParamList, "Add">;

type Props = {
  route: RouteProps;
  navigation: NavProps;
};

export default function AddTaskScreen({ route, navigation }: Props) {
  const { tasks, setTasks } = route.params;
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") {
      Alert.alert("Erro", "Digite uma tarefa válida!");
      return;
    }

    setTasks([...tasks, text]);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Tarefa</Text>

      <TextInput
        placeholder="Digite a tarefa..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#316ff4",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
