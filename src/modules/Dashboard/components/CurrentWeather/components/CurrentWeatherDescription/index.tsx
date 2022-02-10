import React, { FC } from "react";
import { FiWind, FiDroplet } from "react-icons/fi";
import { MdSpeed } from "react-icons/md";

import cl from "./styles.module.scss";
import { useTranslation } from "react-i18next";

interface ICWDescription {
  humidity: number;
  windSpeed: number;
  pressure: number;
}

const CurrentWeatherDescription: FC<ICWDescription> = ({
  humidity,
  windSpeed,
  pressure,
}) => {
  const { t } = useTranslation();

  const descItems = [
    {
      icon: <FiWind className={cl.icon} />,
      content: `${windSpeed} ${t("ms")}`,
    },
    {
      icon: <FiDroplet className={cl.icon} />,
      content: `${humidity}%`,
    },
    {
      icon: <MdSpeed className={cl.icon} />,
      content: `${pressure} ${t("hPa")}`,
    },
  ];

  return (
    <div className={cl.component}>
      {descItems.map((item, index) => (
        <span className={cl.container} key={index}>
          {item.icon}
          {item.content}
        </span>
      ))}
    </div>
  );
};

export default CurrentWeatherDescription;
