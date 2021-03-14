import axios from "axios";
import { BASE_URL } from "./constants";

const getEventsUrl = (eventType: string) =>
  `${BASE_URL}/v3/events/?state=upcoming&type=${eventType}`;

const getPaginatedEventsUrl = (paginationQs: string) =>
  `${BASE_URL}/v3/events/${paginationQs}`;

export const fetchEventsByType = (eventType: string) =>
  axios.get(getEventsUrl(eventType));

export const fetchPaginatedEvents = (paginationQs: string) =>
  axios.get(getPaginatedEventsUrl(paginationQs));
