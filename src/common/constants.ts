export const QUOTE_FORM = [
  {
    label: "Starting country",
    type: "text",
    key: "countryFrom",
    values: [],
  },
  {
    label: "Destination country",
    type: "text",
    key: "countryTo",
    values: [],
  },
  {
    label: "Quote price",
    type: "text",
    key: "quotePrice",
    values: [],
  },
  {
    label: "Shipping channel",
    type: "options",
    key: "channel",
    values: ["Air", "Ocean"],
  },
] as const;
