import React from "react"
import { View, Text } from "react-native/";
import { styles } from "../../App";

export default function Rotas() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.titles}>Rotas</Text>

                <Text style={styles.text}>As telas estão separadas em 4, sendo elas:</Text>
                <Text style={styles.text}>Home: Breve introdução ao aplicativo.</Text>
                <Text style={styles.text}>Telas: Pontua que cada icone tem o nome de sua Respectiva tela.</Text>
                <Text style={styles.text}>Rotas: Apresenta as rotas do app.</Text>
                <Text style={styles.text}>Bibliotecas: Apresenta as bibliotecas utilizadas no app.</Text>
            </View>
        </View>
    );
}