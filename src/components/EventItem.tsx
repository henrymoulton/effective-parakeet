import * as React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Paragraph, Surface, Title } from "react-native-paper";
import { Event } from "../types";

type EventItemProps = {
  event: Event;
};

export const EventItem = ({ event }: EventItemProps) => {
  const handleOnPress = () =>
    Linking.openURL(`https://smarkets.com${event.full_slug}`);

  return (
    <Surface style={{ margin: 16, borderRadius: 8 }} key={event.id}>
      <TouchableOpacity style={{ padding: 16 }} onPress={handleOnPress}>
        <Title>{event.name}</Title>
        <Paragraph>
          Start Time: {new Date(event.start_datetime).toDateString()}
        </Paragraph>
        {event.seo_description ? (
          <Paragraph>{event.seo_description}</Paragraph>
        ) : null}
      </TouchableOpacity>
    </Surface>
  );
};
