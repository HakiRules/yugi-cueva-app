
import { create } from "zustand"
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tables } from "@/types/database.types";

interface IDeckState {
  decks: Tables<'deck'>[];
  setDecks: (decks: Tables<'deck'>[]) => void;
  deckExists: (deckId: string) => boolean
  updateDecks: (decks: Tables<'deck'>[]) => void
}

export const useDeckStore = create<IDeckState>()(
  persist(
    (set, get) => ({
      decks: [],
      setDecks: (decks) => set({ decks }),
      deckExists: (deckId) => !!get().decks.find(deck => deck.id === deckId),
      updateDecks: (decks) => {
        const missingDecks = decks.filter(deck => !get().decks.find(item => item.id === deck.id))
        set({ decks: get().decks.concat(missingDecks) })
      }
    }),
    {
      name: 'decks-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)