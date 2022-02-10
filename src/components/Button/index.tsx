import React, { FC } from "react";

import cl from "./styles.module.scss";
import IButton from "./type";

const Button: FC<IButton> = ({ label, type = "button", isDisabled }) => (
  <button className={cl.component} type={type} disabled={isDisabled}>
    {label}
  </button>
);

export default Button;
