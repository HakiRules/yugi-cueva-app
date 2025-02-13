import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ReactNode } from "react"
import { Colors } from "@/constants/colors"


type RouteIcons = {
  [route: string]: (color: string) => ReactNode,
}

const icons: RouteIcons = {
  "index": (color: string) => <Ionicons name="albums" size={24} color={color} />,
  "fight": (color: string) => <Ionicons name="add" size={24} color={color} />,
  "matches": (color: string) => <Ionicons name="list" size={24} color={color} />,
  "settings": (color: string) => <Ionicons name="settings" size={24} color={color} />,
  "tierlist": (color: string) => <Ionicons name="apps" size={24} color={color} />,
}

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {

  return (
    <View style={styles.tab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabItem}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name](isFocused ? Colors.primary : Colors.grey)}
            <Text style={{ color: isFocused ? Colors.primary : Colors.grey, fontSize: 11 }}>
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4
  },
})