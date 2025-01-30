import { CardsInDeck } from "@/constants/data";
import { CardInDeck, CardPosition } from "@/types/Card";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { Image, ScrollView, Text, View } from "react-native";

type DeckStructure = {
  [CardPosition.MAIN]: CardInDeck[],
  [CardPosition.EXTRA]: CardInDeck[],
  [CardPosition.SIDE]: CardInDeck[]
}

const timestamp = new Date().getTime()

export default function Page() {
  const { id } = useLocalSearchParams()

  const deck = useMemo(() =>
    CardsInDeck.reduce<DeckStructure>(
      (prev, current) => {
        prev[current.position].push(current)
        return prev
      },
      {
        [CardPosition.MAIN]: [],
        [CardPosition.EXTRA]: [],
        [CardPosition.SIDE]: []
      }
    ), [id])

  const mainDeckCount: number = CardsInDeck.filter(itm => itm.position === CardPosition.MAIN).reduce((prev, current) => {
    return prev + current.quantity
  }, 0)

  return (
    <ScrollView style={{ padding: 10 }}>
      <View>
        <Text>Main Deck ({mainDeckCount} Card Deck)</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 3, flexWrap: 'wrap', width: 'auto' }}>
        {deck[CardPosition.MAIN].map(itm =>
          <Image
            key={itm.card_id}
            style={{ height: 108, aspectRatio: 0.68 }}
            resizeMode="contain"
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/CardImages/${itm.card_id}.jpg?ver=${timestamp}` }}
          />
        )}
      </View>
      <View>
        <Text>Extra Deck</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 3, flexWrap: 'wrap' }}>
        {deck[CardPosition.EXTRA].map(itm =>
          <Image
            key={itm.card_id}
            style={{ height: 108, aspectRatio: 0.68 }}
            resizeMode="contain"
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/CardImages/${itm.card_id}.jpg?ver=${timestamp}` }}
          />
        )}
      </View>
      <View>
        <Text>Side Deck</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 3, flexWrap: 'wrap' }}>
        {deck[CardPosition.SIDE].map(itm =>
          <Image
            key={itm.card_id}
            style={{ height: 108, aspectRatio: 0.68 }}
            resizeMode="contain"
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/CardImages/${itm.card_id}.jpg?ver=${timestamp}` }}
          />
        )}
      </View>
    </ScrollView>
  )

}