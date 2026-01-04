import React from "react"
import { View, Text } from "react-native/";
import { styles } from "../../App";

export default function Telas() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.titles}>Nomes das telas</Text>

                <Text style={styles.text}>Perceba que cada aba representa uma tela do aplicativo.</Text>
            </View>
        </View>
    );
}