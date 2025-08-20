import { ApiClient } from "./ApiClient"

export const getMatches = () => {
  return ApiClient.instance.from("match").select().order('date', { ascending: false })
}

export const getMatchesData = () => {
  return ApiClient.instance.from("match_data").select()
}