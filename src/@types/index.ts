export interface QuoteForm {
  countryFrom: string;
  countryTo: string;
  quotePrice: string;
  channel: "Ocean" | "Air";
}

export interface RangeType {
  start: null | number;
  end: null | number;
}

export interface QuoteType {
  range: RangeType;
  header: string;
  route: string;
  price: string;
  channel: QuoteForm["channel"];
}
