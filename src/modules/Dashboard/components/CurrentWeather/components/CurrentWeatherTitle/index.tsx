import React, { FC } from "react";
import classNames from "classnames";

import cl from "./styles.module.scss";
import cl_basic from "../../styles.module.scss";
import { useTranslation } from "react-i18next";

interface ICurrentWeatherTitle {
  location: string;
  updated: Date;
}

const CurrentWeatherTitle: FC<ICurrentWeatherTitle> = ({
  location,
  updated,
}) => {
  const { t } = useTranslation();
  const toSimilar = (value: number) => (value < 10 ? `0${value}` : value);
  const updateHour = updated?.getHours();
  const updatedMin = updated?.getMinutes();
  const updateTime = `${toSimilar(updateHour)}.${toSimilar(updatedMin)}`;

  return (
    <h4 className={classNames(cl.component, cl_basic.secInfo)}>
      <div>{location}</div>
      <div>
        {t("updated")}: {updateTime}
      </div>
    </h4>
  );
};

export default CurrentWeatherTitle;
