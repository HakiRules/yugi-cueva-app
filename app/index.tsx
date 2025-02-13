import { login } from "@/client/Authentcation";
import { Colors } from "@/constants/colors";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const setAuth = useAuthStore(state => state.setAuth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.secondary }}>
      <TextInput
        style={{ borderRadius: 10 }}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={{ borderRadius: 10 }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ backgroundColor: Colors.primary, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, elevation: 8 }}
        disabled={!(!!email && !!password)}
        onPress={() => {
          login(email, password).then(res => {
            console.log(res)
            setAuth({
              userId: res.data.user?.id,
              expiresAt: res.data.session?.expires_at,
              token: res.data.session?.access_token
            })
          })
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}