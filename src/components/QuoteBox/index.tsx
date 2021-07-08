import { FC } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPlane, faShip } from "@fortawesome/free-solid-svg-icons";
import { QuoteType } from "../../@types/index";
import { getDate } from "../../utils";

interface QuoteBoxProps {
  data: QuoteType;
}

const QuoteBox: FC<QuoteBoxProps> = ({
  data: { range, channel, header, price, route },
}) => {
  const isAir = channel === "Air";
  const icon = <Icon icon={isAir ? faPlane : faShip} className={style.icon} />;
  const date = range.start && range.end && getDate(range.start, range.end);

  if (!(range.end && range.start)) return null;
  return (
    <div className={style.container}>
      <div className={style.col1}>
        <div className={style.header}>
          {icon} {header}
        </div>
        <div className={style.body}>
          <div
            className={style.noDays}
          >{`${range.start}-${range.end} days`}</div>
          <div className={style.estimate}>
            Estimated delivery
            <br />
            <span className={style.date}>{date}</span>
          </div>
        </div>
      </div>
      <div className={style.col2}>
        <div className={style.header}>{route}</div>
        <div className={style.price}>{price}</div>
      </div>
    </div>
  );
};

export default QuoteBox;
