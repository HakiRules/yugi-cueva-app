import { Chip } from "@/components/Chip";
import { Deck } from "@/types/Deck";
import { Link } from "expo-router";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const timestamp = new Date().getTime()

  return (
    <FlatList
      style={{ margin: 5 }}
      numColumns={1}
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
            <ImageBackground
              style={{ flex: 1 }}
              imageStyle={{ borderRadius: 5 }}
              resizeMode="cover"
              source={{
                uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${item.id}.jpeg?ver=${timestamp}`
              }}
            >
              <View style={styles.imageBackgroundOpacity}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <Chip>
                    {item.tierlist}
                  </Chip>
                  <Chip>
                    Tier {item.tier}
                  </Chip>
                </View>
                <View>
                  <Text style={{ color: 'white', fontSize: 25 }}>{item.name}</Text>
                  <Text style={{ color: 'white' }}>{item.points} points</Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </Link>
      }
      keyExtractor={item => `${item.id}-${item.name}`}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    margin: 5,
    height: 130
  },
  imageBackgroundOpacity: {
    flex: 1,
    backgroundColor: '#000000b3',
    borderRadius: 5,
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between"
  },
})

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