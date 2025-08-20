import { DeckSelector } from "@/components/fight/DeckSelector";
import { Tables } from "@/types/database.types";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import NotFound from "@/assets/images/NotFound.jpg"
import { LpCalculatorModal } from "@/components/fight/LpCalculator";

const timestamp = new Date().getTime()

type DuelState = {
  lp1: number
  lp2: number
  deck1?: Tables<'deck'>
  deck2?: Tables<'deck'>
}

const DEFAULT_STATE: DuelState = {
  lp1: 8000,
  lp2: 8000,
  deck1: undefined,
  deck2: undefined,
}

type DeckKeys = Pick<DuelState, "deck1" | "deck2">

export default function FightScreen() {
  const [duelState, setDuelState] = useState<DuelState>(DEFAULT_STATE)
  const [openCalc, setOpenCalc] = useState(false)

  const changeSelectedDeck = (player: keyof DeckKeys) => (deckId: Tables<'deck'>) => {
    setDuelState(prev => ({ ...prev, [player]: deckId }))
  }

  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <DeckSelector align="left" onChangeDeck={changeSelectedDeck("deck1")} selectedDeck={duelState.deck1?.id} />
        <View style={{ alignItems: 'center', }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={
              duelState.deck1 ?
                { uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${duelState.deck1?.image ?? ""}?ver=${timestamp}` }
                : NotFound
            }
          />
          <Text style={{ color: 'white' }}>{duelState.deck1?.name}</Text>
        </View>
        <Text style={{ color: "white", fontSize: 40 }}>{duelState.lp1}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <DeckSelector align="right" onChangeDeck={changeSelectedDeck("deck2")} selectedDeck={duelState.deck2?.id} />
        <View style={{ alignItems: 'center', }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={
              duelState.deck2 ?
                { uri: `https://tbdesplqufizydsciqzq.supabase.co/storage/v1/object/public/DeckImages/${duelState.deck2?.image ?? ""}?ver=${timestamp}` }
                : NotFound
            }
          />
          <Text style={{ color: 'white' }}>{duelState.deck2?.name}</Text>
        </View>
        <TouchableOpacity onPress={() => setOpenCalc(true)}>
          <Text style={{ color: "white", fontSize: 40 }}>{duelState.lp2}</Text>
        </TouchableOpacity>
      </View>
      <LpCalculatorModal open={openCalc} onClose={() => setOpenCalc(false)} currentLp={duelState.lp2} />
    </View>
  )
}
