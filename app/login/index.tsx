import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Index() {
    const router = useRouter();

    const handlePress = () => {
        router.push('/interno/56');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ain jeanzada do xesquedele.</Text>
            <Text>Ain jeanzada do xesquedele.</Text>
            <Link href="/interno/list" style={styles.linkList}>
                Ir para a List
            </Link>
            <Text>Ain jeanzada do xesquedele.</Text>
            <Link
                href={{
                    pathname: '/interno/[id]',
                    params: { id: '123', color: 'red' },
                }}
                style={styles.linkList}
            >
                Ir para a List
            </Link>

            <Button onPress={handlePress} title="Ir para a List" />
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
