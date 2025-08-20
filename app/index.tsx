import { login } from "@/client/Authentcation";
import { Colors } from "@/constants/theme";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Logo from "@/assets/images/logo.png"
import { useTranslation } from "react-i18next";
import { router } from "expo-router";
import { ApiClient } from "@/client/ApiClient";

export default function SignIn() {
  const { t } = useTranslation()
  const setAuth = useAuthStore(state => state.setAuth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    ApiClient.instance.auth.getUser().then(res => {
      if (res.data.user?.id) {
        router.replace("/(tabs)")
      }
    })
  }, [])

  return (
    <View style={{ backgroundColor: Colors.secondary, height: "100%", display: "flex", justifyContent: "center", padding: 12, gap: 12 }}>
      <View style={{ marginHorizontal: 'auto', alignItems: 'center' }}>
        <Image style={{ width: 200, height: 200 }} source={Logo} />
      </View>
      <TextInput
        label={t("login.email")}
        onChangeText={setEmail}
        mode="outlined"
        value={email}
      />
      <TextInput
        label={t("login.password")}
        onChangeText={setPassword}
        mode="outlined"
        value={password}
        secureTextEntry
      />
      <Button
        style={{ backgroundColor: Colors.primary, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12, elevation: 8 }}
        textColor="white"
        onPress={() => {
          if (!email || !password) return
          login(email, password).then(res => {
            setAuth({
              userId: res.data.user?.id,
              expiresAt: res.data.session?.expires_at,
              token: res.data.session?.access_token
            })
            router.replace("/(tabs)")
          })
        }}>
        {t("login.sign-in")}
      </Button>
    </View>
  );
}