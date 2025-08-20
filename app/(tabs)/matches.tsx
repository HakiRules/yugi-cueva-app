import { useMatches } from "@/hooks/useMatches";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

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
          <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10 }}>
            <Text style={styles.deckName}>{item.type}</Text>
            <Text style={styles.deckName}>{new Intl.DateTimeFormat('en-GB').format(item.date)}</Text>
          </View>
          <View style={[styles.matchInfo, { height: "auto" }]}>
            <View style={{ flex: 1 }}>
              <ImageBackground
                source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${item.playerDeck?.id ?? ""}.jpeg?ver=${timestamp}` }}
                style={styles.playerSide}
              >
                <View style={styles.overlay}>
                  <Text style={styles.deckName}>{item.playerDeck?.name}</Text>
                  <Text style={styles.points}>{item.playerPoints}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.center}>
              <Text style={styles.score}>{`${item.playerScore} - ${item.opponentScore}`}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <ImageBackground
                source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${item.opponentDeck?.id ?? ""}.jpeg?ver=${timestamp}` }}
                style={styles.playerSide}
              >
                <View style={styles.overlay}>
                  <Text style={styles.deckName}>{item.opponentDeck?.name}</Text>
                  <Text style={styles.points}>{item.opponentPoints}</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
      }
      keyExtractor={item => item.matchId}
    />
  )
}

const styles = StyleSheet.create({
  matchCard: {
    height: 160,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    backgroundColor: "#393f44",
  },
  matchInfo: {
    flexDirection: "row",
    flex: 1
  },
  playerSide: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  deckName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  points: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  center: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
