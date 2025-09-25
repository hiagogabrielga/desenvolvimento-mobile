import { View, Text, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import {SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import { styles } from "./styles"

type Props = {
    chave:number,
    name:string,
    onDelete: (chave: number) => void;
}

export function Itens({chave, name, onDelete}:Props){
    return(
        <View style={styles.container}>
            <AntDesign name="check-circle" size={24} color="white" onPress={() => onDelete(chave)}/>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}