import TabBar from "@/components/TabBar";
import { useAuthStore } from "@/store/useAuthStore";
import { Redirect, Tabs, usePathname } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function TabLayout() {
  const { t } = useTranslation()
  const user = useAuthStore((state) => state.auth?.token)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/fight")
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    else
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
  }, [pathname])

  if (!user) {
    return <Redirect href='/' />
  }

  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('layout.tab.home'),
          sceneStyle: {
            backgroundColor: "#0c1840"
          },
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: t('layout.tab.matches'),
          sceneStyle: {
            backgroundColor: "#0c1840"
          },
        }}
      />
      <Tabs.Screen
        name="fight"
        options={{
          title: t('layout.tab.fight'),
          sceneStyle: {
            backgroundColor: "#0c1840"
          },
          tabBarStyle: { display: "none" }
        }}
      />
      <Tabs.Screen
        name="tierlist"
        options={{
          title: t('layout.tab.tierlist'),
          sceneStyle: {
            backgroundColor: "#0c1840"
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('layout.tab.settings'),
          sceneStyle: {
            backgroundColor: "#0c1840"
          }
        }}
      />
    </Tabs>
  )
}