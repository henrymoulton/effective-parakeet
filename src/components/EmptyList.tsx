import * as React from "react";
import { Text, View } from "react-native";
import { Surface } from "react-native-paper";
import { capitalCase } from "change-case";

type EmptyListProps = {
  loading: boolean;
  selectedEventType: string;
};

export const EmptyList = ({ loading, selectedEventType }: EmptyListProps) => {
  return loading ? null : (
    <Surface
      style={{
        margin: 16,
        borderRadius: 8,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{}}>
        No{" "}
        <Text style={{ fontWeight: "500" }}>
          {capitalCase(selectedEventType)}
        </Text>{" "}
        events right now.
      </Text>
    </Surface>
  );
};
