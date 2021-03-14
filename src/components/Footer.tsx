import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DarkTheme, DefaultTheme, useTheme } from "react-native-paper";
import { Pagination } from "../types";

type FooterProps = {
  goNextPage: () => void;
  pagination?: Pagination;
};

export const Footer = ({ goNextPage, pagination }: FooterProps) => {
  const theme = useTheme();
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={goNextPage} disabled={!pagination?.next_page}>
        <Feather
          name={"arrow-right-circle"}
          size={24}
          style={{
            color:
              theme === DarkTheme
                ? !pagination?.next_page
                  ? DarkTheme.colors.disabled
                  : DarkTheme.colors.text
                : !pagination?.next_page
                ? DefaultTheme.colors.disabled
                : DefaultTheme.colors.text,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
