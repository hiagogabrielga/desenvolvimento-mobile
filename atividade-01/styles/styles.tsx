import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616ff',
    padding: 20
  },
  titulo: {
    marginTop: 50,
    fontSize: 30,
    color: 'white'
  },
  containerInput: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    display: "flex",
    flex: 1
  },
  buttonAdd: {
    backgroundColor: "white",
    display: "flex",
    width: 50,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    textAlign: "center",
    flexDirection: "row",
    padding: 5,
  },
  buttonRemove: {
    color: 'white',
  },
  containerList: {
    borderColor: 'white',
    borderWidth: 1,
    maxHeight: 500,
    borderRadius: 10,
    display: "flex",
    color: "white",
  },

  elementList: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    alignItems: 'center',
    display: 'flex',
    flexDirection: "row",
    padding: "auto",
    height: 60,
    color: "white",
    paddingLeft: 5
  },

  elementName: {
    color: "white",
    paddingLeft: 5,
    maxWidth: 320,
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
  }
});


