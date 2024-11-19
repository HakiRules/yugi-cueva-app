import { Deck } from "@/types/Deck";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

  return (
    <View>
      {UserDecks.map(deck =>
        <View key={deck.id} style={styles.card}>
          <Text>{deck.name}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderBlockColor: "black"
  }
});

const UserDecks: Deck[] = [
  {
    "id": "1",
    "name": "Virtual World",
    "tierlist": "META",
    "tier": -10,
    "points": 0,
    "owner": "56cf938e-3099-4dcf-a70c-e5de9258973d"
  },
  {
    "id": "2",
    "name": "Magickey",
    "tierlist": "META",
    "tier": -10,
    "points": 0,
    "owner": "56cf938e-3099-4dcf-a70c-e5de9258973d"
  }
]