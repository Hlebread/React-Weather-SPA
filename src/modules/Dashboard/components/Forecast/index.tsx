import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./styles.module.scss";
import { days, months } from "../../../../utils/constants";
import { useAppSelector } from "../../../../store";
import getFormatedDate from "../../../../utils/getFormatedDate";
import { IForecastDayWeather } from "../../../../types/weather";

import { ForecastDay } from "./components";

const Forecast: FC = () => {
  const weather = useAppSelector((state) => state.weather.forecast);
  const { t } = useTranslation();

  return (
    <div className={cl.component}>
      <ul className={cl.list}>
        {weather.map((element: IForecastDayWeather, index: number) => {
          const elementDate = element.dt;
          const { date, dayName, month } = getFormatedDate(elementDate, days);
          const monthName = months[month];
          return (
            <ForecastDay
              key={index}
              date={{ dayName: t(dayName), month: t(monthName), date }}
              weather={element}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Forecast;
