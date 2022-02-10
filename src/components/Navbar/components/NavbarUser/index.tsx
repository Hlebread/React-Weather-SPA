import React, { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router";

import cl from "./styles.module.scss";
import cl_basic from "../../styles.module.scss";
import INavbarUser from "./type";
import { baseLinksConfig } from "../../../../src.config";

const NavbarUser: FC<INavbarUser> = ({ username, imageURL }) => {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/profile");

  return (
    <div
      className={classNames(cl.component, cl_basic.link)}
      onClick={clickHandler}
    >
      <img
        src={imageURL || baseLinksConfig.USER_IMG}
        alt=""
        className={cl.avatar}
      />
      <span className={cl.text}>{username || "Username"}</span>
    </div>
  );
};

export default NavbarUser;
