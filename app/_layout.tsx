import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="list" options={{ title: 'List' }} />
            <Stack.Screen name="billing" options={{ title: 'Billing' }} />
            <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
        </Stack>
    );
}
