import { ApiClient } from "./ApiClient"

export const getUserDecks = async (user: string) => {
  return ApiClient.instance.from('deck').select().eq('owner', user);
}

export const getCardsInDeck = async (deckId: string) => {
  return ApiClient.instance.from('card_in_deck').select().eq("deck_id", deckId)
}

export const getDecksByIds = async (ids: string[]) => {
  return ApiClient.instance.from('deck').select().in('id', ids);
}

export const getAllMetaDecks = async () => {
  return ApiClient.instance.from('deck').select().eq('tierlist', "META");
}
