import React, { FC } from "react";

import cl from "./styles.module.scss";
import IInput from "./type";

const Input: FC<IInput> = ({
  id,
  type = "text",
  placeholder = "Type here...",
  invalidMessage,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        id={id}
        className={cl.component}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className={cl.invalid}>{invalidMessage}</span>
    </>
  );
};

export default Input;
