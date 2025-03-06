import { Enums } from "./database.types"

export type CardInDeck = {
  card_id: number
  deck_id: string
  position: Enums<"CardPosition">
  quantity: number
}
