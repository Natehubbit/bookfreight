import { FC, useCallback, useState } from "react";
import style from "./style.module.css";
import { QuoteForm } from "../@types";
import { QUOTE_FORM } from "../common/constants";
import Button from "../components/Button";
import QuoteBox from "../components/QuoteBox";
import {
  getStartDay,
  getEndDay,
  getCashValue,
  validateString,
  validateNumber,
} from "../utils";
import { QuoteType } from "../@types/index";

const App: FC = () => {
  const [form, setForm] = useState<Partial<QuoteForm>>({
    countryFrom: undefined,
    countryTo: undefined,
    quotePrice: undefined,
    channel: "Air",
  });
  const [quoteData, setQuoteData] = useState<QuoteType>({
    header: "",
    price: "",
    range: { end: null, start: null },
    route: "",
    channel: "Air",
  });
  const onChangeInput = useCallback(
    (value: string, key: typeof QUOTE_FORM[number]["key"]) => {
      let valid = undefined;
      if (key === "quotePrice") {
        valid = validateNumber(value);
      } else {
        valid = validateString(value);
      }
      if (!valid) return;
      return setForm((frm) => ({ ...frm, [key]: value }));
    },
    [setForm]
  );
  const onCreateQuote = () => {
    const {
      channel,
      countryFrom: from,
      countryTo: to,
      quotePrice,
    } = form;
    if (!(from && to && channel && quotePrice))
      return alert("Please make sure all fields are populated");
    const isAir = channel === "Air";
    const header = `Traditional ${isAir ? "air" : "ocean"} freight`;
    const start = getStartDay(channel);
    const end = getEndDay(channel, start);
    end &&
      start &&
      setQuoteData({
        channel: form.channel!,
        header,
        price: getCashValue(quotePrice),
        range: { start, end },
        route: `${from} -> ${to}`,
      });
  };

  return (
    <>
      <div className={style.container}>
        {QUOTE_FORM.map((f) => {
          const isOptionSelector = f.type === "options";
          return (
            <label key={f.key} className={style.formItem}>
              {f.label}
              {!isOptionSelector ? (
                <input
                  type="text"
                  onChange={({ target: { value } }) =>
                    onChangeInput(value, f.key)
                  }
                  value={form[f.key] || ""}
                />
              ) : (
                <select
                  onChange={({ currentTarget: { value } }) =>
                    onChangeInput(value, f.key)
                  }
                  value={form[f.key]}
                >
                  {f.values.map((opt) => {
                    return <option key={opt}>{opt}</option>;
                  })}
                </select>
              )}
            </label>
          );
        })}
        <Button onClick={onCreateQuote}>Create quote</Button>
      </div>
      <div className={style.quoteBoxContainer}>
        <QuoteBox data={quoteData} />
      </div>
    </>
  );
};

export default App;
