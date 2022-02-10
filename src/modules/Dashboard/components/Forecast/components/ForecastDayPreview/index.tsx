import React, { FC } from "react";

import cl from "./styles.module.scss";

interface IForecastDayPreview {
  date: { date: number; month: string; dayName: string };
  tempDay: number;
  tempNight: number;
  icon: string;
}

const ForecastDayPreview: FC<IForecastDayPreview> = ({
  date,
  tempDay,
  tempNight,
  icon,
}) => (
  <div className={cl.component}>
    <div className={cl.date}>
      <div className={cl.weekDay}>{date.dayName}</div>
      <div>
        {date.month}, {date.date}
      </div>
    </div>
    <img src={icon} alt="Weather icon" className={cl.icon} />
    <div className={cl.temp}>
      {tempDay}&deg;/{tempNight}&deg;
    </div>
  </div>
);

export default ForecastDayPreview;
