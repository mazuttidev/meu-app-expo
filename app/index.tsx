import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ain jeanzada do xesquedele.</Text>
            <Text>Ain jeanzada do xesquedele.</Text>
            <Link href="/list" style={styles.linkList}>
                Ir para a List
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: 'red',
    },
    linkList: {
        fontSize: 20,
        margin: 10,
        color: 'white',
        textDecorationLine: 'underline',
    },
});
