import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class ApiClient {
  static supabaseClient: SupabaseClient

  public static get instance(): SupabaseClient {
    if (!ApiClient.supabaseClient) {
        ApiClient.supabaseClient = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL ?? "", process.env.EXPO_PUBLIC_SUPABASE_PUBLIC_KEY ?? "");
    }

    return ApiClient.supabaseClient;
  }
}