import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function App() {
  const [produtos, setProdutos] = useState(["Maça", "Banana", "Melancia"]);
  const [produtoAdd, setProdutoAdd] = useState("");
  async function adicionarProduto() {
    if (produtoAdd.trim() === "") return;
    setProdutos([...produtos, produtoAdd]);
    setProdutoAdd("");
  }

  async function retirarProduto(produto: string) {
    let lista = produtos.filter(item => item !== produto)
    setProdutos(lista)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de compras</Text>
      <View style={styles.containerInput}>
        <TextInput value={produtoAdd} placeholder='Digite o Produto' onChangeText={(text) => setProdutoAdd(text)} style={styles.input} />
        <TouchableOpacity>
          <MaterialIcons name="add-circle-outline" size={40} onPress={adicionarProduto} style={styles.buttonAdd} />
        </TouchableOpacity>
        
      </View>
      <FlatList
        style={styles.containerList}
        data={produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (

          <View style={styles.elementList}>
            <TouchableOpacity>
              <Ionicons style={styles.buttonRemove} name="checkmark-circle" size={40} onPress={() => retirarProduto(item)} />
            </TouchableOpacity>
            
            <Text style={styles.elementName}>{item}</Text>
          </View>
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
