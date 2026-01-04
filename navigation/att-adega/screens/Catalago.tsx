import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const dados = [
  {
    nome: "Chatigny Chardonnay",
    descricao: "Vinho leve, refrescante e levemente cítrico da cir amarelo palha. Perfeito com carnes brancas e massa ao pesto.",
    imagem: require("../assets/vinho-branco.jpg"),
  },
  {
    nome: "Concha y Toro Exportacion",
    descricao: "Vinho rosé fresco, intenso e macio de cor rosa pálido. Perfeotp cp, salada e aperitivos.",
    imagem: require("../assets/vinho-rose.jpg"),
  },
  {
    nome: "Portada Winemaker's",
    descricao: "vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.",
    imagem: require("../assets/vinho-tinto.jpg"),
  },
  {
    nome: "Elvio Cogno ravera Barolo",
    descricao: "Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é avermalhada pálida.",
    imagem: require("../assets/vinho-especial.jpg"),
  },
];

export default function ContatoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.titulo}>Nossos vinhos</Text>

      <Text style={styles.descricao}>
        Trabalhamos com os melhores vinhos dos seguintes tipos: Vinho branco,
        vinho rosé, vinho tinto e vinho seco.
      </Text>

      <View style={styles.lista}>
        {dados.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.imagem} style={styles.img} />

            <View style={styles.containerCard}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricaoItem}>{item.descricao}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  descricao: {
    marginBottom: 20,
    fontSize: 16,
  },

  lista: {
    gap: 20,
  },

  card: {
    flexDirection: "row",
    gap: 15,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    position: 'relative'
  },

  img: {
    width: 50,
    height: 200,
    borderRadius: 8,
  },

  containerCard: {
    width: 280,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  descricaoItem:{
    marginBottom: 20,
    textAlign: 'justify',
    fontSize: 16,
  }
});
