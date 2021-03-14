import * as React from "react";
import { DarkTheme, DefaultTheme } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

type ThemeSelectorProps = {
  setTheme: (theme: typeof DarkTheme | typeof DefaultTheme) => void;
  theme: typeof DarkTheme | typeof DefaultTheme;
};

export const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  return (
    <Feather
      name={theme === DarkTheme ? "moon" : "sun"}
      size={24}
      onPress={() => setTheme(theme === DarkTheme ? DefaultTheme : DarkTheme)}
      style={{
        alignSelf: "flex-end",
        marginEnd: 40,
        color:
          theme === DarkTheme
            ? DarkTheme.colors.text
            : DefaultTheme.colors.text,
      }}
    />
  );
};
