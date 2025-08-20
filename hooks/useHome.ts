import { getUserDecks } from "@/client/Decks";
import { useAuthStore } from "@/store/useAuthStore";
import { useDeckStore } from "@/store/useDecksStore";
import { useEffect, useMemo } from "react";

export const useHome = () => {

  const { decks, updateDecks } = useDeckStore()
  const user = useAuthStore(state => state.auth?.userId)


  useEffect(() => {
    if(user){
      getUserDecks(user).then(res => {
        if(res.error){

        }else{
          updateDecks(res.data)
        }
      })
    }
  }, [])

  const userDecks = useMemo(() => {
    return decks.filter(deck => deck.owner === user)
  }, [decks])

  return {
    userDecks
  }
}