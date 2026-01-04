import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    width: "100%",
    minHeight: "100%",
  },
  container: {
    paddingTop: 120,
    padding: '10%',
    backgroundColor: "#fff",
    alignItems: 'flex-start',
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: "bold",
  },
  list: {
    maxHeight: 250,
    width: "100%",
    gap: 25,
  },
  item: {
    marginTop: 15,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  about: {
    width: "60%",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  descrition: {
    textAlign: "justify",
  },
  containerCosts: {
    width: "30%",
    alignItems: "flex-end",
    height: "100%",
  },
  containerQuant: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  containerValue: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "justify",
    width: "100%",
    marginTop: 40,
    gap: 15,
  },
  containerForm: {
    backgroundColor: "#d8d8d8ff",
    height: "50%",
    width: '80%',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 'auto',
    borderRadius: 15,
  },
  backgroundForm: {
    backgroundColor: "#00000063",
    width: "100%",
    minHeight: "100%",
    position: "absolute",
  },
  inputForm: {
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 50,
    paddingLeft: 15
  },
  buttonModal: {
    display: 'flex',
    flexDirection: 'row',
  }
});
