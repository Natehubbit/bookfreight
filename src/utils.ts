import moment from "moment";
import { QuoteForm } from "./@types";

export const getStartDay = (type: QuoteForm["channel"]) => {
  if (type === "Air") {
    return Math.floor(Math.random() * (7 - 3) + 3);
  }
  return Math.floor(Math.random() * (30 - 25) + 25);
};

export const getEndDay = (type: QuoteForm["channel"], start: number) => {
  if (type === "Air") {
    return Math.floor(Math.random() * (start + 4 - start + 2) + start + 2);
  }
  return Math.floor(Math.random() * (start + 10 - start + 5) + start + 5);
};

export const getDate = (start: number, end: number) => {
  const startDate = moment().add(start, "days").format("MMM DD");
  const endDate = moment().add(end, "days").format("MMM DD");
  return `${startDate}-${endDate}`;
};

export const getCashValue = (value: string) => {
  const numberFormat = Intl.NumberFormat("en-US", {
    useGrouping: true,
  });
  const cash = numberFormat.format(Number(value));
  return `US$ ${cash}`;
};

export const validateString = (country: string) => {
  var format = /[!@#$%^&*()_+=\\[\]{};:"\\|~`,.<>\\/?0-9]+/;
  if (format.test(country)) {
    return false;
  } else {
    return true;
  }
};

export const validateNumber = (value: string) => {
  var format = /[!@#$%^&*()_+=\\[\]{};\-:"\\|'~`,.<>\\/?a-zA-Z\s]+/;
  if (format.test(value)) {
    return false;
  } else {
    return true;
  }
};
