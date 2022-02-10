import React, { FC } from "react";
import classNames from "classnames/bind";

import cl from "./styles.module.scss";
import INavbar from "./type";
import { useAppSelector } from "../../store";

import {
  NavbarFooter,
  NavbarList,
  NavbarSignIn,
  NavbarUser,
} from "./components";

const cx = classNames.bind(cl);

const Navbar: FC<INavbar> = ({ active }) => {
  const auth = useAppSelector((state) => state.auth);
  const { displayName, photoURL, email } = auth.userData;
  const isAuthorized = auth.isAuthorized;

  return (
    <nav
      className={cx({
        component: true,
        component_active: active,
      })}
    >
      {isAuthorized ? (
        <NavbarUser username={displayName || email} imageURL={photoURL} />
      ) : (
        <NavbarSignIn />
      )}
      <NavbarList />
      {isAuthorized ? <NavbarFooter /> : null}
    </nav>
  );
};

export default Navbar;
