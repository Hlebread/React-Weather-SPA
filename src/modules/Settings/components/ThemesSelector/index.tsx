import React, { FC } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { IoCheckmarkOutline } from "react-icons/io5";

import cl from "./styles.module.scss";
import { useAppSelector } from "../../../../store";
import { THEMES } from "../../../../utils/constants";
import { setThemeAction } from "../../../../store/actions/settings";

const cx = classNames.bind(cl);

const ThemesSelector: FC = () => {
  const dispatch = useDispatch();
  const appTheme = useAppSelector((state) => state.settings.theme);

  return (
    <div className={cl.component}>
      {THEMES.map((theme, index) => {
        const clickHandler = () => dispatch(setThemeAction(theme));

        return (
          <div
            className={cx({ item: true, isChecked: appTheme === theme })}
            key={index}
            style={{ backgroundColor: theme === "main" ? "#4d5bf9" : theme }}
            onClick={clickHandler}
          >
            <IoCheckmarkOutline />
          </div>
        );
      })}
    </div>
  );
};

export default ThemesSelector;
