import { Text, View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles/styles";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ProdutoItem from "./components/ProdutoItem"; // import do componente separado

export default function App() {
  const [produtos, setProdutos] = useState(["Maça", "Banana", "Melancia"]);
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

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de compras</Text>

      <View style={styles.containerInput}>
        <TextInput
          value={produtoAdd}
          placeholder="Digite o Produto"
          onChangeText={setProdutoAdd}
          style={styles.input}
        />
        <TouchableOpacity onPress={adicionarProduto}>
          <MaterialIcons
            name="add-circle-outline"
            size={40}
            style={styles.buttonAdd}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.containerList}
        data={produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProdutoItem nome={item} onRemove={() => retirarProduto(item)} />
        )}
        ListEmptyComponent={
          <View style={styles.elementList}>
            <Text style={styles.elementName}>Lista vazia</Text>
          </View>
        }
      />
    </View>
  );
}
