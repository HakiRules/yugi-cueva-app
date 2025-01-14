import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  const { user } = useLocalSearchParams()

  return (
    <View>
      <Text>{user}</Text>
    </View>
  )

}