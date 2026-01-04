import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "List">;
};

export default function TaskListScreen({ navigation }: Props) {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas Tarefas</Text>

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma tarefa adicionada ainda.</Text>
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Detail", { task: item, index, tasks, setTasks })
            }
          >
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Add", { tasks, setTasks })}
      >
        <Text style={styles.addText}>+ Adicionar Tarefa</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  emptyText: {
    opacity: 0.6,
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
  card: {
    backgroundColor: "#e7efff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 18,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#316ff4",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
