import { ScrollView, Text, Button, View } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Input } from "./components/Input";
import { Itens } from "./components/Itens";


export default function App() {
  const [produtos, setProdutos] = useState<string[]>([]);
  const [produtoAdd, setProdutoAdd] = useState("");

  function adicionarProduto() {
    if (produtoAdd.trim() === "") return;
    setProdutos([...produtos, produtoAdd]);
    setProdutoAdd("");
  }

  function apagarTodos() {
    setProdutos([])
  }

  function apagarItem(chave: number) {
    setProdutos(produtos.filter((_, index) => index !== chave));
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de compras</Text>
      <Input placeH="Digite o produto"
        onChangeText={e => setProdutoAdd(e)}
        onPress={adicionarProduto} value={produtoAdd} />
      <View style={styles.containerList}>
        <ScrollView>
          {produtos.length === 0 ? (
            <Text style={{ display: "flex", textAlign: "center", color: "#d8d8d8ff", marginTop: 150, fontSize: 20 }}>
              Lista vazia
            </Text>) : (
            produtos.map((item, index) => (
              <Itens key={index}
                chave={index}
                name={item}
                onDelete={apagarItem} 
              />
            ))
          )
          }
        </ScrollView>
      </View>
      <ScrollView>
        <Button title="Apagar tudo" onPress={apagarTodos} />
      </ScrollView>

    </View>
  );
}
