import React, { FC } from "react";
import { IoMenuOutline } from "react-icons/io5";

import cl from "./styles.module.scss";
import IAppHeader from "./type";

import UnitsToggle from "./components/UnitsToggle/UnitsToggle";

const AppHeader: FC<IAppHeader> = ({ toggleNavbar }) => (
  <header className={cl.component}>
    <div className={cl.burger} onClick={toggleNavbar}>
      <IoMenuOutline />
    </div>

    <div className={cl.container}>
      <UnitsToggle />
    </div>
  </header>
);

export default AppHeader;
