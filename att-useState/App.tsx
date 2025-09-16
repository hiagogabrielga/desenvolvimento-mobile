import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Input } from "./components/Input";
import { Itens } from "./components/Itens";

export default function App() {
  const [produtos, setProdutos] = useState<String[]>([]);
  const [produtoAdd, setProdutoAdd] = useState("");

  function adicionarProduto() {
    if (produtoAdd.trim() === "") return;
    setProdutos([...produtos, produtoAdd]);
    setProdutoAdd("");
  }

  function retirarProduto(produto: string) {
    let lista = produtos.filter((item) => item !== produto);
    setProdutos(lista);
  }

  function retirarTudo() {
    setProdutos(['']);
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Input placeH="Digite o produto"
      onChangeText={e => setProdutoAdd(e)}
      onPress={adicionarProduto}/>
      value={listaName}
    </View>
  );
}
