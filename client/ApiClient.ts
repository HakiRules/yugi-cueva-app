import { Database } from "@/types/database.types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class ApiClient {
  private static supabaseClient: SupabaseClient<Database, "public">

  public static get instance(): SupabaseClient<Database, "public"> {
    if (!ApiClient.supabaseClient) {
      ApiClient.supabaseClient = createClient<Database>(
        process.env.EXPO_PUBLIC_SUPABASE_URL ?? "", 
        process.env.EXPO_PUBLIC_SUPABASE_PUBLIC_KEY ?? "",
        {
          auth: {
            storage: AsyncStorage,
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
            
          }
        }
      );
    }

    return ApiClient.supabaseClient;
  }
}