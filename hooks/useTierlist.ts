import { getAllMetaDecks } from "@/client/Decks"
import { useDeckStore } from "@/store/useDecksStore"
import { Tables } from "@/types/database.types"
import { useEffect, useMemo } from "react"

type Tierlist = {
  [tier: string]: Tables<"deck">[]
}

export const useTierlist = () => {
  const { decks, updateDecks } = useDeckStore()

  useEffect(() => {
      getAllMetaDecks().then(res => {
        if(res.error){

        }else{
          updateDecks(res.data)
        }
      })
  }, [])

  const tierlist = useMemo(() => {
    return decks.reduce<Tierlist>((prev, current) => {
              if(current.tier === null)  return prev
              if(!prev[current.tier.toString()]) prev[current.tier.toString()] = []
              prev[current.tier.toString()].push(current)
              prev[current.tier.toString()].sort((a, b) => (b.points ?? 0) - (a.points ?? 0))
              return prev
            },
            {} as Tierlist)
  }, [decks])

  return {
    tierlist
  }
}