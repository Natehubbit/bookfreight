import { FC, HTMLAttributes } from "react";
import style from "./style.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={style.container} {...props}>
      {children}
    </button>
  );
};

export default Button;
