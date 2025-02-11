import { Stack } from 'expo-router';
import 'react-native-reanimated';
import '@/components/i18n'

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="deck" options={{ headerShown: false }} />
    </Stack>
  )
}
