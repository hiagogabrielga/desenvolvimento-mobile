import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from '@expo/vector-icons/AntDesign';
const listaProdutosIniciais = [
  {
    nome: "Feijoada da Casa",
    nomeProdutor: "Pai de familía",
    preco: 15,
    quantidade: 0,
  },
  {
    nome: "Coxinha de Frango Cremosa",
    nomeProdutor: "Prima galinha",
    preco: 4,
    quantidade: 0,
  },
  {
    nome: "Pastel de Carne",
    nomeProdutor: "Pastel do Japa",
    preco: 6,
    quantidade: 0,
  },
  {
    nome: "Açaí Tropical",
    nomeProdutor: "Açaí terra",
    preco: 9,
    quantidade: 0,
  },
];
export default function App() {
  const [listaProdutos, setListaProudots] = useState(listaProdutosIniciais);
  const [showForm, setShowForm] = useState(true);
  const [precoTotal, setPrecoTotal] = useState<number>(0);

  const [addNome, setAddNome] = useState<string>("");
  const [addNomeProdutor, setAddNomeProdutor] = useState<string>("");
  const [addvalor, setAddvalor] = useState<number>(0);

  let taxa = precoTotal > 0 ? 5 : 0;

  const add = (index: number) => {
    listaProdutos[index].quantidade += 1;
    calcValor();
  };

  const remove = (index: number) => {
    if (listaProdutos[index].quantidade > 0) {
      listaProdutos[index].quantidade -= 1;
      calcValor();
    } else {
      return;
    }
  };

  const calcValor = () => {
    let vavlores = 0;
    listaProdutos.map((item) => (vavlores += item.preco * item.quantidade));
    setPrecoTotal(vavlores);
  };

  const formatacao = (valor: number) => {
    let valorStr = String(valor.toFixed(2));
    return "R$" + valorStr.replace(".", ",");
  };

  const addProduto = (nome: string, nomeProdutor: string, valor: number) => {
    if (nome == "" || nomeProdutor == "" || valor == 0) {
      return alert("Adicione todos os valores para adicionar produto.");
    }
    setListaProudots([
      ...listaProdutos,
      { nome: nome, nomeProdutor: nomeProdutor, preco: valor, quantidade: 0 },
    ]);
    setAddNome("");
    setAddNomeProdutor("");
    setAddvalor(0);
    return alert("Produto adicionado com sucesso!");
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setShowForm(!showForm)} style={styles.buttonModal}>
          <Entypo name="add-to-list" size={24} color="black" />
          <Text> Adionar item</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Lista de compra</Text>
        <ScrollView style={styles.list}>
          {listaProdutos.map((item, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.about}>
                <Text style={styles.name}>{item.nome}</Text>
                <Text style={styles.descrition}>{item.nomeProdutor}</Text>
              </View>
              <View style={styles.containerCosts}>
                <View style={styles.containerQuant}>
                  <TouchableOpacity onPress={() => remove(index)}>
                    <MaterialIcons name="remove-circle" size={24} color="red" />
                  </TouchableOpacity>
                  <Text>{item.quantidade}</Text>
                  <TouchableOpacity onPress={() => add(index)}>
                    <Ionicons name="add-circle" size={24} color="green" />
                  </TouchableOpacity>
                </View>
                <Text>{formatacao(item.preco)}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.containerValue}>
          {precoTotal > 0 && (
            <Text>Taxa de entrega(45 - 60min) {formatacao(taxa)}</Text>
          )}
          <Text>Total do pedido {formatacao(precoTotal + taxa)}</Text>
        </View>
      </View>
      {showForm && (
        <View style={styles.backgroundForm}>
          <View style={styles.containerForm}>
            <TouchableOpacity onPress={() => setShowForm(!showForm)} style={styles.buttonModal}>
              <AntDesign name="close-circle" size={24} color="red" />
              <Text> Fechar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Adicionar produto</Text>
            <TextInput
              style={styles.inputForm}
              placeholder="Adicionar nome do produto"
              value={addNome}
              onChangeText={(text) => setAddNome(text)}
            />
            <TextInput
              style={styles.inputForm}
              placeholder="Adicionar nome do produtor"
              value={addNomeProdutor}
              onChangeText={(text) => setAddNomeProdutor(text)}
            />
            <TextInput
              style={styles.inputForm}
              placeholder="Adicionar valor"
              value={String(addvalor)}
              onChangeText={(text) => setAddvalor(Number(text))}
            />
            <Button
              title="Adicionar"
              onPress={() => addProduto(addNome, addNomeProdutor, addvalor)}
            />
          </View>
        </View>
      )}
    </View>
  );
}
