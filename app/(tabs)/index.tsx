import { Deck } from "@/types/Deck";
import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const timestamp = new Date().getTime()

  return (
    <FlatList
      style={{ margin: 5 }}
      numColumns={2}
      data={UserDecks}
      renderItem={({ item }) =>
        <Link
          href={{
            pathname: '/deck',
            params: { user: item.name }
          }}
          asChild
        >
          <TouchableOpacity style={styles.card}>
            <Text style={{ textAlign: "center" }}>{item.name}</Text>
            <Image
              width={50}
              height={50}
              source={{
                uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${item.id}.jpeg?ver=${timestamp}`
              }} />
          </TouchableOpacity>
        </Link>
      }
      keyExtractor={item => `${item.id}-${item.name}`}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderBlockColor: "black",
    margin: 5,
    alignItems: "center"
  }
});

const UserDecks: Deck[] = [
  {
    "id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "name": "Virtual World",
    "tierlist": "META",
    "tier": -10,
    "points": 0,
    "owner": "56cf938e-3099-4dcf-a70c-e5de9258973d"
  },
  {
    "id": "4331b756-24d5-45f7-8d40-e2cf838be474",
    "name": "Magickey",
    "tierlist": "META",
    "tier": -10,
    "points": 0,
    "owner": "56cf938e-3099-4dcf-a70c-e5de9258973d"
  }
]