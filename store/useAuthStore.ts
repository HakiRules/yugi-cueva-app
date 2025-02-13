
import { create } from "zustand"
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuth {
  userId?: string
  token?: string
  expiresAt?: number
}

interface IAuthState {
  auth: IAuth | null;
  setAuth: (authData: IAuth) => void;
  clearAuth: () => void
}

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      auth: null,
      setAuth: (authData) => set({ auth: authData }),
      clearAuth: () => set({})
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)