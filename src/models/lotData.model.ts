export interface LotData {
  data: Data;
}

export interface Data {
  id: number;
  title: string;
  description: string;
  unique_code: string;
  starts_at: string;
  ends_at: string;
  seller_name: string;
  seller_phone: string;
  lot_sms_messages: LotSMSMessages;
}

export interface LotSMSMessages {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  client: string;
  msg: string;
  dt: string;
}

export interface Meta {
  current_page: number;
  total_pages: number;
  count: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
  next: null;
  prev: null;
}
