export type Deck = {
  id: string
  name: string
  owner: string | null
  points: number | null
  tier: number | null
  tierlist: Tierlist | null
}

export type DeckMovementPollVote = {
  date: string | null
  poll_id: string
  type: PollVote | null
  user_id: string
}

export type DeckMovementPoll = {
  action: PollAction | null
  date: string
  deck: string | null
  ended: boolean
  id: string
}

export enum Tierlist {
  META = "meta",
  CHILL = "chill"
}

export enum PollAction { 
  TIER_UP = "TIERUP",
  TIER_DOWN = "TIERDOWN",
  TIERLIST_UP = "TIERLISTUP",
  TIERLIST_DOWN = "TIERLISTDOWN"
}

export enum PollVote { 
  UP = "UP",
  DOWN = "DOWN",
  NEUTRAL = "NEUTRAL"
}