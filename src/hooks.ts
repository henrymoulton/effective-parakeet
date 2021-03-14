import { useEffect, useState } from "react";
import { EVENT_TYPES } from "./constants";
import { Event, Pagination } from "./types";
import { ItemValue } from "@react-native-picker/picker/typings/Picker";
import { AxiosResponse } from "axios";
import { fetchEventsByType, fetchPaginatedEvents } from "./api";

export const useUpcomingEvents = () => {
  const [selectedEventType, setSelectedEventType] = useState<string>(
    EVENT_TYPES[0]
  );
  const [events, setEvents] = useState<Array<Event>>();
  const [pagination, setPagination] = useState<Pagination>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSetEventType = (itemValue: ItemValue) => {
    setSelectedEventType(itemValue as string);
    setPagination(undefined);
  };

  const handleResponse = (res: AxiosResponse) => {
    setEvents(res.data.events);
    setPagination(res.data.pagination);
    setLoading(false);
  };

  const getEventsByType = async () => {
    try {
      setLoading(true);
      const res = await fetchEventsByType(selectedEventType);
      handleResponse(res);
    } catch (e) {
      console.log(e);
    }
  };

  const goNextPage = async () => {
    if (pagination?.next_page) {
      try {
        setLoading(true);
        const res = await fetchPaginatedEvents(pagination.next_page);
        handleResponse(res);
      } catch (e) {
        console.log(e);
      }
    }
  };
  useEffect(() => {
    (async () => {
      await getEventsByType();
    })();
  }, [selectedEventType]);
  return {
    events,
    goNextPage,
    handleSetEventType,
    loading,
    pagination,
    selectedEventType,
  };
};
