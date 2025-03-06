import { getUserDecks } from "@/client/Decks";
import { useAuthStore } from "@/store/useAuthStore";
import { useDeckStore } from "@/store/useDecksStore";
import { useEffect } from "react";

export const useHome = () => {

  const { decks, setDecks } = useDeckStore()
  const user = useAuthStore(state => state.auth?.userId)

  useEffect(() => {
    if(user){
      getUserDecks(user).then(res => {
        if(res.error){

        }else{
          setDecks(res.data)
        }
      })
    }
  }, [])

  return {
    decks
  }
}