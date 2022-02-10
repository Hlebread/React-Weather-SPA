import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import cl from "./styles.module.scss";
import IAppPreloader from "./type";

const cx = classNames.bind(cl);
const arcs = [1, 2, 3, 4, 5];

const AppPreloaderArcs: FC = () => {
  return (
    <>
      {arcs.map((num) => (
        <div className={cl.lineWrapper} key={num}>
          <div className={cl.line}></div>
        </div>
      ))}
    </>
  );
};

const AppPreloader: FC<IAppPreloader> = ({ active }) => {
  const { t } = useTranslation();

  return (
    <div className={cx({ component: true, component_active: active })}>
      <div className={cl.container}>
        <AppPreloaderArcs />
      </div>
      <div className={cl.text}>{t("preloader")}...</div>
    </div>
  );
};

export default AppPreloader;
