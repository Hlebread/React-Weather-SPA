import React, { FC } from "react";

import cl from "./styles.module.scss";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <div className={cl.component}>{message}</div>;
};

export default ErrorMessage;
