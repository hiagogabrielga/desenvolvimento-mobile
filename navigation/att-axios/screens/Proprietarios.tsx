import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface Fazenda {
  id: number;
  nome: string;
  endereco: string;
  municipio: string;
  uf: string;
  proprietario_id: number;
  proprietario: string;
}

export default function ProprietariosScreens() {
  const [lista, setLista] = useState<Fazenda[]>([]);
  const [listaFiltrada, setListaFiltrada] = useState<Fazenda[]>([]);
  const [inputNome, setInputNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function buscarFazendas() {
    try {
      const resultado = await axios.get(
        "https://apivacinacao.dev.vilhena.ifro.edu.br/fazendas"
      );

      setLista(resultado.data);
      setListaFiltrada(resultado.data);

      if (resultado.data.length === 0) {
        setMensagem("Nenhum proprietário encontrado.");
      }
    } catch (e) {
      setMensagem("Erro ao carregar proprietários.");
      console.error(e);
    }
  }

  function buscarPorProprietario(nome: string) {
    if (nome.trim() === "") {
      setListaFiltrada(lista);
      setMensagem("");
      return;
    }

    const filtrada = lista.filter((item) =>
      item.proprietario.toLowerCase().includes(nome.toLowerCase())
    );

    setListaFiltrada(filtrada);

    if (filtrada.length === 0) {
      setMensagem("Nenhum proprietário encontrado com esse nome.");
    } else {
      setMensagem("");
    }
  }

  useEffect(() => {
    buscarFazendas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Proprietários</Text>

      <TextInput
        placeholder="Pesquisar por nome do proprietário"
        placeholderTextColor="#A8C3E5"
        value={inputNome}
        onChangeText={(t) => {
          setInputNome(t);
        }}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => buscarPorProprietario(inputNome)}
      >
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>

      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ padding: 20 }}
        data={listaFiltrada}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.proprietario}</Text>
            <Text style={styles.infoFazenda}>Fazenda: {item.nome}</Text>
            <Text style={styles.infoLocal}>
              {item.municipio} - {item.uf}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={{ marginTop: 20 }}>
            <Text style={styles.mensagem}>{mensagem}</Text>
          </View>
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7F0FA",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1B4F72",
    alignSelf: "center",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#90B5E1",
    marginBottom: 10,
    color: "#1B4F72",
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#2980B9",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderLeftColor: "#2980B9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B4F72",
  },

  infoFazenda: {
    fontSize: 16,
    color: "#2E86C1",
    marginTop: 5,
  },

  infoLocal: {
    fontSize: 15,
    color: "#21618C",
  },

  mensagem: {
    textAlign: "center",
    fontSize: 18,
    color: "#1B4F72",
    fontWeight: "600",
  },
});
