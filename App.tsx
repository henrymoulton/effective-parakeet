import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleProp, ViewStyle } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { EventList } from "./src/components/EventList";
import Constants from "expo-constants";

export default function App() {
  const [theme, setTheme] = useState(DefaultTheme);

  const getBackgroundColor = (theme: typeof DefaultTheme | typeof DarkTheme) =>
    theme === DarkTheme
      ? DarkTheme.colors.background
      : DefaultTheme.colors.background;

  const SAFStyle: StyleProp<ViewStyle> = {
    flex: 1,
    backgroundColor: getBackgroundColor(theme),
    paddingVertical: 32,
    paddingTop: Platform.select({
      android: Constants.statusBarHeight,
    }),
    justifyContent: "center",
    alignItems: "center",
  };

  const getStatusBarStyle = theme === DarkTheme ? "light" : "dark";

  return (
    <PaperProvider theme={theme}>
      <StatusBar style={getStatusBarStyle} />
      <SafeAreaView style={SAFStyle}>
        <EventList setTheme={setTheme} theme={theme} />
      </SafeAreaView>
    </PaperProvider>
  );
}
