import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#161616ff',
        display: 'flex',
        height: "auto",
        width: "100%",
        flexDirection: "row",
    },
    input:{
        flex: 1,
        backgroundColor: '#0c0c0cff',
        padding: 15,
        borderRadius: 15,
        color: "white",
    },
    button:{
        backgroundColor: '#0c0c0cff',
        padding: 15,
        borderRadius: 15,
        marginLeft: 5,
    },
    buttonText: {
        color: "white"
    },
})