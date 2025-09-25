import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616ff',
    padding: 20,
  },
  titulo: {
    marginTop: 50,
    fontSize: 30,
    color: 'white'
  },
  containerList: {
    borderColor: 'white',
    borderWidth: 2,
    maxHeight: 500,
    minHeight: 500,
    borderRadius: 10,
    display: "flex",
    color: "white",
    marginTop: 25,
    marginBottom: 25,
  },

  buttonRemoveAll: {
    backgroundColor: "white",
    cursor: 'pointer',
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
});


