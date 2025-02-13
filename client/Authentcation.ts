import { ApiClient } from "./ApiClient"

export const login = async (email: string, password: string) => {
  return ApiClient.instance.auth.signInWithPassword({
    email,
    password
  })
}