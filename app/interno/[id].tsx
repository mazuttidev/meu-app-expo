import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { StyleSheet, Text, View } from 'react-native';

export default function RotaDinamica() {
    const { id, color } = useLocalSearchParams();
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text>ID: {id}</Text>
            <Text>Color: {color}</Text>
            <Link href="/interno/" style={styles.link}>
                Ir para a Home
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        fontSize: 20,
        margin: 10,
        color: 'red',
        textDecorationLine: 'underline',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
