import { getCardsInDeck } from "@/client/Decks"
import { useEffect, useState } from "react"
import { Enums } from "@/types/database.types";
import { CardInDeck } from "@/types/Card";

type DeckStructure = {
  [position in Enums<"CardPosition">]: CardInDeck[]
}

export const useDeck = (deckId: string) => {
  const [deckStructure, setDeckStructure] = useState<DeckStructure>({
    ["MAIN"]: [],
    ["EXTRA"]: [],
    ["SIDE"]: []
  })

  useEffect(() => {
    getCardsInDeck(deckId).then((res) => {
      if(res.error){

      }else{
          const cards = res?.data?.reduce<DeckStructure>(
            (prev, current) => {
              prev[current.position].push(current)
              return prev
            },
            {
              ["MAIN"]: [],
              ["EXTRA"]: [],
              ["SIDE"]: []
            } as DeckStructure
          )
          setDeckStructure(cards)
      }
    })
  }, [deckId])

  return {
    deckStructure
  }
}