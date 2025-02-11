import { CardsInDeck } from "@/constants/data";
import { CardInDeck, CardPosition } from "@/types/Card";
import { useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Image, ScrollView, Text, View } from "react-native";

type DeckStructure = {
  [CardPosition.MAIN]: CardInDeck[],
  [CardPosition.EXTRA]: CardInDeck[],
  [CardPosition.SIDE]: CardInDeck[]
}

const timestamp = new Date().getTime()

export default function Page() {
  const { id } = useLocalSearchParams()
  const { t } = useTranslation()

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
        <Text>{t("deck.main.title", { mainDeckCount })}</Text>
      </View>
      <View style={{ flex: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 2 }}>
        {deck[CardPosition.MAIN].map(item => <View style={{ padding: 2, maxWidth: '20%' }}>
          <Image
            key={item.card_id}
            style={{ width: '100%', aspectRatio: 0.68, flex: 1 / 5 }}
            resizeMode="contain"
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/CardImages/${item.card_id}.jpg?ver=${timestamp}` }}
          />
          <Text style={{ position: 'absolute', bottom: 5, right: 5, fontSize: 20, fontWeight: 'bold' }}>x{item.quantity}</Text>
        </View>)}
      </View>
      <View>
        <Text>{t("deck.extra.title")}</Text>
      </View>
      <View style={{ flex: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 2 }}>
        {deck[CardPosition.EXTRA].map(item => <View style={{ padding: 2, maxWidth: '20%' }}>
          <Image
            key={item.card_id}
            style={{ width: '100%', aspectRatio: 0.68, flex: 1 / 5 }}
            resizeMode="contain"
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/CardImages/${item.card_id}.jpg?ver=${timestamp}` }}
          />
          <Text style={{ position: 'absolute', bottom: 5, right: 5, fontSize: 20, fontWeight: 'bold' }}>x{item.quantity}</Text>
        </View>)}
      </View>
      <View>
        <Text>{t("deck.side.title")}</Text>
      </View>
      <View style={{ flex: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 2 }}>
        {deck[CardPosition.SIDE].map(item => <View style={{ padding: 2, maxWidth: '20%' }}>
          <Image
            key={item.card_id}
            style={{ width: '100%', aspectRatio: 0.68, flex: 1 / 5 }}
            resizeMode="contain"
            source={{ uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/CardImages/${item.card_id}.jpg?ver=${timestamp}` }}
          />
          <Text style={{ position: 'absolute', bottom: 5, right: 5, fontSize: 20, fontWeight: 'bold' }}>x{item.quantity}</Text>
        </View>)}
      </View>
    </ScrollView>
  )

}