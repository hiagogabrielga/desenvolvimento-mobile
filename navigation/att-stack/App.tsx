import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import TaskListScreen from "./screens/TaskList";
import AddTaskScreen from "./screens/AddTask";
import TaskDetailScreen from "./screens/TaskDetail";

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Add: {
    tasks: string[];
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  };
  Detail: {
    task: string;
    index: number;
    tasks: string[];
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={TaskListScreen} />
        <Stack.Screen name="Add" component={AddTaskScreen} />
        <Stack.Screen name="Detail" component={TaskDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}