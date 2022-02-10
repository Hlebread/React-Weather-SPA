import React, { FC } from "react";
import classNames from "classnames/bind";

import cl from "./styles.module.scss";
import ISwitchButton from "./type";

const cx = classNames.bind(cl);

const SwitchButton: FC<ISwitchButton> = ({ isToggled, toggle, label }) => (
  <label className={cx({ component: true, component_active: isToggled })}>
    <input
      type="checkbox"
      checked={isToggled}
      className={cl.input}
      onChange={toggle}
    />
    <span className={cl.label}>{label}</span>
    <span className={cl.slider}></span>
  </label>
);

export default SwitchButton;
