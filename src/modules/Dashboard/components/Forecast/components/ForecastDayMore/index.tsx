import React, { FC } from "react";
import { FiWind, FiDroplet } from "react-icons/fi";
import { MdSpeed } from "react-icons/md";
import { IoUmbrellaOutline, IoCloudyOutline, IoGlasses } from "react-icons/io5";

import cl from "./styles.module.scss";
import { useTranslation } from "react-i18next";

interface IForecastDayMore {
  weather: {
    humidity: number;
    pressure: number;
    wind: number;
    pop: number;
    clouds: number;
    uv: number;
  };
}

const ForecastDayMore: FC<IForecastDayMore> = ({ weather }) => {
  const { t } = useTranslation();

  const moreItems = [
    {
      icon: <FiDroplet className={cl.icon} />,
      content: `${weather.humidity}%`,
    },
    {
      icon: <MdSpeed className={cl.icon} />,
      content: `${weather.pressure} ${t("hPa")}`,
    },
    {
      icon: <FiWind className={cl.icon} />,
      content: `${weather.wind} ${t("ms")}`,
    },
    {
      icon: <IoUmbrellaOutline className={cl.icon} />,
      content: `${weather.pop}%`,
    },
    {
      icon: <IoCloudyOutline className={cl.icon} />,
      content: `${weather.clouds}%`,
    },
    {
      icon: <IoGlasses className={cl.icon} />,
      content: weather.uv,
    },
  ];

  return (
    <div className={cl.component}>
      {moreItems.map((item, index) => (
        <span className={cl.container} key={index}>
          {item.icon}
          {item.content}
        </span>
      ))}
    </div>
  );
};

export default ForecastDayMore;
