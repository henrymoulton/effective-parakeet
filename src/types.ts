export type Pagination = {
  next_page?: string;
};

export type Event = {
  bet_allowed: boolean;
  bettable: boolean;
  chart_time_period: string;
  created: string;
  description: string;
  display_order: number;
  end_date: string;
  full_slug: string;
  hidden: boolean;
  id: string;
  inplay_enabled: boolean;
  modified: string;
  name: string;
  parent_id: string;
  seo_description: string;
  short_name: string;
  slug: string;
  special_rules: string;
  start_date: string;
  start_datetime: string;
  state: string;
};
