import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';
import React, { useState } from 'react';

interface Lista {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
}

export default function ProprietariosScreens() {
    const [lista, setLista] = React.useState<Lista[]>([]);
    const [listaFiltrada, setListaFiltrada] = React.useState<Lista[]>([]);

    async function buscarProprietarios() {
        try {
            let resposta = await axios.get("https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios")
            setLista(resposta.data)
            setListaFiltrada(resposta.data)
            if (lista.length == 0) {
                setMensagem("Nenhum proprietário encontrado.")
            }
        } catch (error) {
            setMensagem("Erro ao buscar proprietários.")
            console.error(error)
        }

    }

    async function buscarPorNome(nome: string) {
        try {
            if (nome != "") {
                let resultado = lista.filter((item) => item.nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase()))
                if (resultado.length == 0) {
                    setMensagem("Nenhum proprietário com esse nome.")
                }
                setListaFiltrada(resultado)
            } else {
                setListaFiltrada(lista)
            }

        } catch (error) {

        }
    }

    const [mensagem, setMensagem] = React.useState(String);
    const [nome, setNome] = React.useState(String);

    React.useEffect(() => {
        buscarProprietarios();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Listagem dos proprietários (api)</Text>
            <StatusBar style="auto" />
            <View style={styles.pesquisa}>
                <TextInput placeholder='Joaquim' value={nome} onChangeText={setNome} keyboardType='twitter' style={styles.input} />
                <Button title='Pesquisar' onPress={() => buscarPorNome(nome)} />
            </View>

            <FlatList
                data={listaFiltrada}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.card}>
                        <Text><Text style={{ fontWeight: 'bold' }}>Nome: </Text>{item.nome}</Text>
                        <Text><Text style={{ fontWeight: 'bold' }}>Email: </Text>{item.email}</Text>
                        <Text><Text style={{ fontWeight: 'bold' }}>Telefone: </Text>{item.telefone}</Text>
                        <Text><Text style={{ fontWeight: 'bold' }}>CPF: </Text>{item.cpf}</Text>


                    </View>
                )}
                ListEmptyComponent={<View><Text>{mensagem}</Text></View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    },

    card: {
        width: 300,
        padding: 5,
        backgroundColor: "#ccc",
        marginVertical: 5,
        borderRadius: 10,
    },
    pesquisa: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 2,
        paddingLeft: 5,
        borderRadius: 10,
        borderColor: '#black',
        fontSize: 14,
        alignItems: 'center',
        display: 'flex'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15
    }
});
