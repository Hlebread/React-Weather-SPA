import React, { FC } from "react";
import { RiEmotionSadLine } from "react-icons/ri";

import cl from "./styles.module.scss";
import useTitle from "../../hooks/useTitle";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Error: FC = () => {
  useTitle("oops");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const clickHandler = () => navigate("/dashboard");

  return (
    <div className={cl.component}>
      <RiEmotionSadLine className={cl.icon} />
      <div className={cl.text}>
        {t("message404")}
        <span className={cl.link} onClick={clickHandler}>
          {t("here")}
        </span>
      </div>
    </div>
  );
};

export default Error;
