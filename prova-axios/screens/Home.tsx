import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreens() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../assets/douglas.png')} style={styles.imagem} />
                <Text>Douglas Legramante</Text>
            </View>
            <View style={styles.card}>
                <Image source={require('../assets/carequinha.png')} style={styles.imagem} />
                <Text>
                    Humpty Dumpty</Text>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        gap: 20,
        width: "100%",
        justifyContent: 'center',
    },
    imagem: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    card: {
        width: 300,
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    }

});
