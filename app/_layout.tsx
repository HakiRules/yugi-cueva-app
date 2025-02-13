import { Slot } from 'expo-router';
import 'react-native-reanimated';
import '@/components/i18n'
import { PaperProvider } from "react-native-paper"
import { theme } from '@/constants/theme';

export default function RootNav() {

  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  )
}
