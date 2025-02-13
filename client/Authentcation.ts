import { ApiClient } from "./ApiClient"

export const login = async (user: string, password: string) => {
  let email = user
  if(!email.includes("@")){
    const { data } = await ApiClient.instance.rpc('get_email_by_username', { name: user });
    email = data ?? user
  }
  return ApiClient.instance.auth.signInWithPassword({
    email,
    password
  })
}