import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
        }}
      />
      <Tabs.Screen
        name="fight"
        options={{
          title: 'Fight',
        }}
      />
      <Tabs.Screen
        name="tierlist"
        options={{
          title: 'Tierlist',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  )
}