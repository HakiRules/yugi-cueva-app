import { useDeck } from "@/hooks/useDeck";
import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, ScrollView, Text, View } from "react-native";

const timestamp = new Date().getTime()

export default function Page() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { deckStructure } = useDeck(id)
  const { t } = useTranslation()

  const mainDeckCount: number = deckStructure["MAIN"]?.reduce((prev, current) => {
    return prev + current.quantity
  }, 0)


  return (
    <ScrollView style={{ padding: 10 }}>
      <View>
        <Text>{t("deck.main.title", { mainDeckCount })}</Text>
      </View>
      <View style={{ flex: 5, flexDirection: 'row', flexWrap: 'wrap', padding: 2 }}>
        {deckStructure["MAIN"].map(item => <View style={{ padding: 2, maxWidth: '20%' }} key={item.card_id}>
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
        {deckStructure["EXTRA"].map(item => <View style={{ padding: 2, maxWidth: '20%' }} key={item.card_id}>
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
        {deckStructure["SIDE"].map(item => <View style={{ padding: 2, maxWidth: '20%' }} key={item.card_id}>
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