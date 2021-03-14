import * as React from "react";
import { Surface, Text, Title } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { EVENT_TYPES } from "../constants";
import { capitalCase } from "change-case";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";
import { Platform } from "react-native";

type HeaderProps = {
  selectedEventType: string;
  handleSetEventType: (item: ItemValue) => void;
};

export const Header = ({
  handleSetEventType,
  selectedEventType,
}: HeaderProps) => {
  return (
    <>
      <Title
        style={{
          fontSize: 28,
          fontWeight: "700",
          marginHorizontal: 16,
          marginBottom: 8,
        }}
      >
        Upcoming Events
      </Title>
      <Surface style={{ margin: 16, borderRadius: 8, padding: 16 }}>
        <Text style={{ fontWeight: "500", marginBottom: 4 }}>Filters:</Text>
        <Picker
          selectedValue={selectedEventType}
          onValueChange={handleSetEventType}
          style={{
            maxWidth: Platform.select({
              web: 200,
            }),
          }}
          testID={"selectEventType"}
        >
          {EVENT_TYPES.map((type) => (
            <Picker.Item key={type} value={type} label={capitalCase(type)} />
          ))}
        </Picker>
      </Surface>
    </>
  );
};
