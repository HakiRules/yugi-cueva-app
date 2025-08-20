import { Tables } from "@/types/database.types"
import { Link } from "expo-router"
import { useState } from "react"
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Avatar } from "react-native-paper"

type TierListRowProps = {
  decks: Tables<"deck">[]
  tier: string
}

const tierlistColors = [
  '#ff7f7f',
  '#ffbf7f',
  '#ffdf7f',
  '#FFFF7F',
  '#bfff7f',
  '#7fff7f',
  '#7fffff',
  '#7fbfff',
  '#7f7fff',
  '#ff7fff',
  '#bf7fbf'
]
const timestamp = new Date().getTime()

export const TierListRow = ({ tier, decks }: TierListRowProps) => {

  const [showAll, setShowAll] = useState(false)
  const decksToShow = decks.slice(0, 3)
  const remainingDecks = decks.slice(3)

  const toggleShowAll = () => {
    setShowAll(prev => !prev)
  }

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={toggleShowAll}
          disabled={decks.length <= 3}
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: tierlistColors[parseInt(tier)]
          }}
        >
          <Text style={{ color: "black" }}>{tier}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {decksToShow.map(deck =>
            <Link
              key={deck.id}
              href={{
                pathname: '/deck',
                params: { id: deck.id }
              }}
              asChild
            >
              <TouchableOpacity style={{ flex: 1, margin: 5 }}>
                <ImageBackground
                  source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${deck?.image ?? ""}?ver=${timestamp}` }}
                  style={{ flex: 1 }}
                />
                <Avatar.Image
                  size={24}
                  style={{ position: "absolute", top: 0, right: 0, }}
                  source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/Pfps/${deck.owner}.jpeg` }}
                />
                <Text style={{ bottom: 0, right: 0, color: "white", position: "absolute" }}>{deck.points}</Text>
              </TouchableOpacity>
            </Link>
          )}
        </View>
      </View>
      {showAll &&
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 100, height: 100, backgroundColor: tierlistColors[parseInt(tier)] }} />
          <ScrollView horizontal>
            {remainingDecks.map(deck =>
              <Link
                href={{
                  pathname: '/deck',
                  params: { id: deck.id }
                }}
                asChild
                key={deck.id}
              >
                <TouchableOpacity style={{ width: 100, height: 100, padding: 5 }}>
                  <ImageBackground
                    source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${deck?.image ?? ""}?ver=${timestamp}` }}
                    style={{ flex: 1 }}
                  />
                  <Avatar.Image
                    size={24}
                    style={{ position: "absolute", top: 5, right: 5, }}
                    source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/Pfps/${deck.owner}.jpeg` }}
                  />
                  <Text style={{ bottom: 5, right: 5, color: "white", position: "absolute" }}>{deck.points}</Text>
                </TouchableOpacity>
              </Link>
            )}
          </ScrollView>
        </View >
      }
    </View >

  )
}