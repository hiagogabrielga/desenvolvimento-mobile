import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from 'react';

export default function CalculadoraScreens() {
    const [numeroA, setNumeroA] = React.useState(String);
    const [numeroB, setNumeroB] = React.useState(String);
    const [resultado, setResultado] = React.useState(String);

    function calculadora() {
        try {
            if (numeroA == "" || numeroB == "") {
                alert("Deve ser informado dois valores.")
            } else {
                let numeroAFormatado = Number(numeroA.replace(",", "."))
                let numeroBFormatado = Number(numeroB.replace(",", "."))
                let soma = String(numeroAFormatado + numeroBFormatado)
                if (isNaN(Number(soma))) {
                    alert("Só é aceito valores numéricos.")
                    setResultado("Erro")
                } else {
                    let somaFormatada = soma.replace(".", ",")
                    setResultado(somaFormatada)
                }

            }
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Numero A</Text>
                <TextInput placeholder='1' keyboardType="numeric" value={numeroA} onChangeText={setNumeroA} style={styles.input} />
            </View>

            <View>
                <Text>Numero B</Text>
                <TextInput placeholder='2' keyboardType="numeric" value={numeroB} onChangeText={setNumeroB} style={styles.input} />
            </View>

            <Button title='Somar' onPress={calculadora} />
            <View style={styles.containerResultado}>
                <Text style={styles.resultado}>Resultado:</Text>
                <Text style={styles.resultadoN}>{resultado}</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 20,
        width: '100%',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 50,
        borderWidth: 2,
        padding: 5,
        borderRadius: 10,
        borderColor: '#black',
        fontSize: 20
    },
    containerResultado: {
        backgroundColor: '#ccc',
        width: 300,
        height: 200,
        borderRadius: 10,
        padding: 10,
    },
    resultado: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    resultadoN: {
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 25
    }
});
