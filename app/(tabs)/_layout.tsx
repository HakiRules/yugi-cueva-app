import TabBar from "@/components/TabBar";
import { useAuthStore } from "@/store/useAuthStore";
import { Redirect, Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  const { t } = useTranslation()
  const user = useAuthStore((state) => state.auth?.token)

  if (!user) {
    return <Redirect href='/' />
  }

  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('layout.tab.home'),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: t('layout.tab.matches'),
        }}
      />
      <Tabs.Screen
        name="fight"
        options={{
          title: t('layout.tab.fight'),
        }}
      />
      <Tabs.Screen
        name="tierlist"
        options={{
          title: t('layout.tab.tierlist'),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('layout.tab.settings'),
        }}
      />
    </Tabs>
  )
}