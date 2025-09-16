import { View, Text, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import {SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import { styles } from "./styles"

type Props = {
    name:string,
}

export function Itens({name}:Props){
    return(
        <View style={styles.container}>
            <AntDesign name="check-circle" size={24} color="black"/>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}