import { Stack } from 'expo-router';
import mock from '../../mock.json';

export default function RootLayout() {
    const verificaUsuarioLogado = false;

    const dados = mock;

    if (!verificaUsuarioLogado) {
        return (
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen
                    name="+not-found"
                    options={{ title: 'Not Found' }}
                />
            </Stack>
        );
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="list" options={{ title: 'List' }} />
            <Stack.Screen name="billing" options={{ title: 'Billing' }} />
            <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
            <Stack.Screen name="[id]" options={{ title: 'Rota dinanmica' }} />
        </Stack>
    );
}
