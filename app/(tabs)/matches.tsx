import { useMatches } from "@/hooks/useMatches";
import { Dimensions, FlatList, ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const { width } = Dimensions.get("window");
const timestamp = new Date().getTime()

export default function SettingsScreen() {

  const { matches } = useMatches()

  return (
    <FlatList
      contentContainerStyle={{ padding: 12 }}
      numColumns={1}
      data={matches}
      renderItem={({ item }) =>
        <View style={styles.matchCard}>
          <ImageBackground
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${item.playerDeck?.id ?? ""}.jpeg?ver=${timestamp}` }}
            style={styles.playerSide}
            imageStyle={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.playerName}>{item.playerDeck?.name}</Text>
            </View>
          </ImageBackground>

          <ImageBackground
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${item.opponentDeck?.id ?? ""}.jpeg?ver=${timestamp}` }}
            style={styles.playerSide}
            imageStyle={{ borderTopRightRadius: 16, borderBottomRightRadius: 16 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.playerName}>{item.opponentDeck?.name}</Text>
            </View>
          </ImageBackground>
          <View style={styles.centerOverlay}>
            <View style={styles.separator} />
            <Text style={styles.score}>{`${item.playerScore}  - ${item.opponentScore}`}</Text>
          </View>
        </View>
      }
      keyExtractor={item => item.matchId}
    />
  )
}

const styles = StyleSheet.create({
  matchCard: {
    flexDirection: "row",
    width: width - 24,
    height: 160,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    backgroundColor: "#000",
    position: "relative",
  },
  playerSide: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 6,
  },
  playerName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  centerOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "40%",
    right: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)", // centro translúcido
    width: 80,
  },
  score: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    zIndex: 2,
    top: 0,
    bottom: 0,
  },
  separator: {
    position: "absolute",
    width: 3,
    height: "120%",
    backgroundColor: "#fff",
    zIndex: 1,
  },
});
