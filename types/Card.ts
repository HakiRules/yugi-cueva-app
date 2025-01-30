export type Card = {
  archetype: string | null
  atk: number | null
  attribute: string | null
  def: number | null
  description: string
  id: number
  image: string | null
  level: number | null
  linkval: number | null
  name: string
  race_type: string
  type: string
  ygoprodeck_url: string
}

export type CardInDeck = {
  card_id: number
  deck_id: string
  position: CardPosition
  quantity: number
}

export enum CardPosition {
  MAIN = "MAIN",
  EXTRA = "EXTRA",
  SIDE = "SIDE"
}