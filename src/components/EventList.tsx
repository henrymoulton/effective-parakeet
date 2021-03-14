import * as React from "react";
import { FlatList, Platform, StyleProp, View, ViewStyle } from "react-native";
import { Event } from "../types";
import { EventItem } from "./EventItem";
import { Footer } from "./Footer";
import { ThemeSelector } from "./ThemeSelector";
import { Header } from "./Header";
import { EmptyList } from "./EmptyList";
import { useUpcomingEvents } from "../hooks";
import { DarkTheme, DefaultTheme } from "react-native-paper";

type EventListProps = {
  theme: typeof DarkTheme | typeof DefaultTheme;
  setTheme: (theme: typeof DarkTheme | typeof DefaultTheme) => void;
};

export const EventList = ({ setTheme, theme }: EventListProps) => {
  const {
    events,
    goNextPage,
    handleSetEventType,
    loading,
    pagination,
    selectedEventType,
  } = useUpcomingEvents();

  const renderEventItem = ({ item }: { item: Event }) => (
    <EventItem event={item} />
  );

  const getFooterComponent = () => <Footer {...{ goNextPage, pagination }} />;

  const getHeaderComponent = () => (
    <View>
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <Header {...{ handleSetEventType, selectedEventType }} />
    </View>
  );

  const getEmptyComponent = () => (
    <EmptyList loading={loading} selectedEventType={selectedEventType} />
  );

  const FlatListStyle: StyleProp<ViewStyle> = {
    width: Platform.select({
      web: "80%",
      ios: "100%",
      android: "100%",
    }),
    maxWidth: 600,
  };

  return (
    <FlatList
      data={events}
      renderItem={renderEventItem}
      style={FlatListStyle}
      refreshing={loading}
      ListEmptyComponent={getEmptyComponent}
      ListHeaderComponent={getHeaderComponent}
      ListFooterComponent={getFooterComponent}
    />
  );
};
