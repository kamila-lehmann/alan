export interface ListItemLinkProps {
  primary: string;
  to: string;
}

export interface EventInterface {
  id: number;
  title: string;
  event_date_time: string;
  description: string;
  image: string;
  event_type: string;
  contact_phone: string;
  contact_email: string;
  event_location: string;
}
