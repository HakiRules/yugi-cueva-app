
import { create } from "zustand"
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tables } from "@/types/database.types";

interface IDeckState {
  decks: Tables<'deck'>[];
  setDecks: (decks: Tables<'deck'>[]) => void;
}

export const useDeckStore = create<IDeckState>()(
  persist(
    (set) => ({
      decks: [],
      setDecks: (decks) => set({ decks }),
    }),
    {
      name: 'decks-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)