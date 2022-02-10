import React, { FC } from "react";

import cl from "./styles.module.scss";
import ISettingsBlock from "./type";

const SettingsBlock: FC<ISettingsBlock> = ({ children, title }) => (
  <div className={cl.component}>
    <h3 className={cl.title}>{title}</h3>
    <div>{children}</div>
  </div>
);

export default SettingsBlock;
