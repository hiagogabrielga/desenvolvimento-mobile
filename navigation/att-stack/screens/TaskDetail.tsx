import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type RouteProps = RouteProp<RootStackParamList, "Detail">;
type NavProps = StackNavigationProp<RootStackParamList, "Detail">;

type Props = {
  route: RouteProps;
  navigation: NavProps;
};

export default function TaskDetailScreen({ route, navigation }: Props) {
  const { task, index, tasks, setTasks } = route.params;

  function handleDelete() {
    Alert.alert("Excluir", "Deseja excluir esta tarefa?", [
      { text: "Cancelar" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: () => {
          const updated = tasks.filter((_, i) => i !== index);
          setTasks(updated);
          navigation.goBack();
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Tarefa</Text>

      <View style={styles.card}>
        <Text style={styles.taskText}>{task}</Text>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>Excluir Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#e7edff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  taskText: {
    fontSize: 20,
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
