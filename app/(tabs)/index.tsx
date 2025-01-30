import { Chip } from "@/components/Chip";
import { UserDecks } from "@/constants/data";
import { Link } from "expo-router";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const timestamp = new Date().getTime()

export default function HomeScreen() {

  return (
    <FlatList
      style={{ margin: 5 }}
      numColumns={1}
      data={UserDecks}
      renderItem={({ item }) =>
        <Link
          href={{
            pathname: '/deck',
            params: { id: item.id }
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
