import React, { FC } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { IoLogOutOutline } from "react-icons/io5";

import cl from "./styles.module.scss";
import cl_basic from "../../styles.module.scss";
import { userLogout } from "../../../../store/actions/auth";

const NavbarFooter: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const logOut = () => {
    dispatch(userLogout());
  };

  return (
    <div className={classNames(cl.component, cl_basic.link)} onClick={logOut}>
      <span className={cl_basic.icon}>
        <IoLogOutOutline />
      </span>
      <span>{t("log_out")}</span>
    </div>
  );
};

export default NavbarFooter;
