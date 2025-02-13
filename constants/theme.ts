import { DefaultTheme, MD3Theme } from "react-native-paper";

export const Colors = {
  primary: "#232d3f",
  secondary: "#F4F6FB",
  accent: "#142324",
  grey: "#737373",
  chipBackground: "#177E89"
}

export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary
  }
  
}
