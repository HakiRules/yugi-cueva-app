import { ReactNode } from "react"
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"

type ChipProps = {
  children: ReactNode
  textStyles?: StyleProp<TextStyle>
  containerStyles?: StyleProp<ViewStyle>
}

export const Chip = ({ children, containerStyles, textStyles }: ChipProps) => {

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={[styles.text, textStyles]}>
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#177E89",
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignSelf: "flex-start"
  },
  text: {
    color: "white",
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "center"
  },
});
