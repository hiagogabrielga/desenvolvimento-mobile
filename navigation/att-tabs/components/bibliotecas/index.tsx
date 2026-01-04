import React from "react"
import { View, Text } from "react-native/";
import { styles } from "../../App";

export default function Bibliotecas() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.titles}>Quais foram as bibliotecas usadas?</Text>

                <Text style={styles.text}>Das bbks não te intereça seu troxa</Text>
                <Text style={styles.text}>@react-navigation/native</Text>
                <Text style={styles.text}>@react-navigation/bottom-tabs</Text>
                <Text style={styles.text}>@expo/vector-icons</Text>
            </View>
        </View>
    );
}