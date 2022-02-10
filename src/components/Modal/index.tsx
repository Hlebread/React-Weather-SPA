import React, { FC } from "react";
import classNames from "classnames/bind";

import cl from "./styles.module.scss";
import IModal from "./type";

const cx = classNames.bind(cl);

const Modal: FC<IModal> = ({ isActive, mix, children }) => (
  <div className={classNames(cx({ component: true, isActive }), mix)}>
    <div className={cl.content}>{children}</div>
  </div>
);

export default Modal;
