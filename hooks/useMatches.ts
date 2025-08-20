import { getDecksByIds } from "@/client/Decks"
import { getMatches, getMatchesData } from "@/client/Matches"
import { useAuthStore } from "@/store/useAuthStore"
import { useDeckStore } from "@/store/useDecksStore"
import { Tables } from "@/types/database.types"
import { useEffect, useState } from "react"

type MatchData = {
  playerDeck?: Tables<'deck'>,
  playerScore: number
  playerPoints: string
  opponentScore: number,
  opponentDeck?: Tables<'deck'>
  opponentPoints: string,
  matchId: string
  type: string
  sideDeck: boolean
  date: Date
  win: boolean
}

export const useMatches = () => {
  const { decks } = useDeckStore()
  const user = useAuthStore(state => state.auth?.userId)
  const [matches, setMatches] = useState<MatchData[]>([])

  const buildMatchData = async () => {
    const {data: matches} = await getMatches()
    const {data: matchesData} = await getMatchesData()

    const collapseMatchData: MatchData[] = []

    //Get missing decks
    const loadedDecks: Tables<"deck">[] = [...decks]
    const missingDecks = matchesData?.filter(itm => !decks?.find(deck => deck.id === itm.deck))?.map(itm => itm.deck) ?? []
    if(missingDecks){
      const { data: decksInfo } = await getDecksByIds(missingDecks)
      loadedDecks.push(...(decksInfo ?? [])) 
    }
    
    matches?.forEach(match => {
      const playerMatches = matchesData?.filter(itm => itm.match_id === match.id)
      const playerMatch = playerMatches?.find(itm => itm.player === user)
      const opponentMatch = playerMatches?.find(itm => itm.player !== user)
      const opponentDeck = loadedDecks.find(deck => deck.id === opponentMatch?.deck ?? "")
      if(playerMatch){
        collapseMatchData.push({
          playerDeck: loadedDecks.find(deck => deck.id === playerMatch?.deck ?? ""),
          playerScore: playerMatch?.score ?? 0,
          playerPoints: playerMatch?.deck_point_changes ?? "",
          opponentDeck: opponentDeck,
          opponentScore: opponentMatch?.score ?? 0,
          opponentPoints: opponentMatch?.deck_point_changes ?? "",
          matchId: match.id,
          type: match.type ?? "",
          sideDeck: match.side_deck ?? false,
          date: new Date(match.date),
          win: playerMatch?.winner ?? false
        })
      }
    })
    setMatches(collapseMatchData)
  }

  useEffect(() => {
   buildMatchData()
  }, [])

  return{
    matches
  }
}