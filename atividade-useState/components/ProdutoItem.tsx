import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../styles";

type ProdutoItemProps = {
  nome: string;
  onRemove: () => void;
};

export default function ProdutoItem({ nome, onRemove }: ProdutoItemProps) {
  return (
    <View style={styles.elementList}>
      <TouchableOpacity onPress={onRemove}>
        <Ionicons style={styles.buttonRemove} name="checkmark-circle" size={40} />
      </TouchableOpacity>
      <Text style={styles.elementName}>{nome}</Text>
    </View>
  );
}
