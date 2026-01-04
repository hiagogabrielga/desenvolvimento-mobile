import React from "react"
import { View, Text } from "react-native/";
import { styles } from "../../App";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.titles}>Como navegar?</Text>
                <Text style={styles.text}>Toque nas abas abaixo para navegar entre as telas.</Text>
            </View>
        </View>
    );
}