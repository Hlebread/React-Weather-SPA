import React, { FC, useState } from "react";
import classNames from "classnames";

import cl from "./GeneralLayout.module.scss";
import themes from "../../styles/themes.module.scss";
import "../../styles/general.scss";

import { Navbar, AppHeader } from "../../components";
import { useAppSelector } from "../../store";

const GeneralLayout: FC = ({ children }) => {
  const appTheme = useAppSelector((state) => state?.settings.theme);
  const [navbarIsActive, setNavbarIsActive] = useState(false);

  const toggleNavbar = () => setNavbarIsActive((prevValue) => !prevValue);

  return (
    <div className={classNames(cl.component, themes[appTheme])}>
      <Navbar active={navbarIsActive} />
      <AppHeader toggleNavbar={toggleNavbar} />
      {children}
    </div>
  );
};

export default GeneralLayout;
