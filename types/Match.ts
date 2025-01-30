export type Match = {
  date: string
  id: string
  side_deck: boolean | null
  type: MatchType | null
}

export type MatchData = {
  deck: string
  deck_point_changes: string | null
  match_id: string
  player: string
  score: number | null
  winner: boolean | null
}

export enum MatchType {
  "1VS1" = "1VS1",
  "2VS2" = "2VS2",
  "3VS3" = "3VS3",
  "ALLVSALL" = "ALLVSALL"
}