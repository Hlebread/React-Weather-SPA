import React, { FC, useState } from "react";
import { IoPerson, IoChevronForwardOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import cl from "./styles.module.scss";
import cl_basic from "../../styles.module.scss";

import AuthModal from "../AuthModal";

const NavbarSignIn: FC = () => {
  const { t } = useTranslation();
  const [modalIsActive, setModalIsActive] = useState(false);

  const openModalHandler = () => setModalIsActive(true);
  const closeModalHandler = () => setModalIsActive(false);

  return (
    <>
      <AuthModal isActive={modalIsActive} closeAction={closeModalHandler} />
      <div
        className={classNames(cl.component, cl_basic.link)}
        onClick={openModalHandler}
      >
        <span className={classNames(cl.icon, cl_basic.icon)}>
          <IoPerson />
        </span>
        <span className={cl.content}>
          {t("sign_in")}
          <IoChevronForwardOutline />
        </span>
      </div>
    </>
  );
};

export default NavbarSignIn;
