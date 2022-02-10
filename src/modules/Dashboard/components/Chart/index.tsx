import React, { FC } from "react";
import { Line } from "react-chartjs-2";

import cl from "./styles.module.scss";
import useTemperatureConversion from "../../../../utils/useTemperatureConversion";
import { useAppSelector } from "../../../../store";

import ChartConfig from "./ChartConfig";
import ChartData from "./ChartData";
import { IForecastDayWeather } from "../../../../types/weather";

const Chart: FC = () => {
  const weather = useAppSelector((state) => state.weather.forecast);
  const { getConvertedTemperature } = useTemperatureConversion();

  const time: Array<number> = [];
  const tempDay: Array<number> = [];
  const tempNight: Array<number> = [];

  weather.forEach((element: IForecastDayWeather) => {
    time.push(element.dt);
    tempDay.push(getConvertedTemperature(element.temp.day));
    tempNight.push(getConvertedTemperature(element.temp.night));
  });

  return (
    <div className={cl.component}>
      <div className={cl.container}>
        <Line
          options={ChartConfig}
          data={ChartData({
            day: tempDay,
            night: tempNight,
            time: time,
          })}
        />
      </div>
    </div>
  );
};

export default Chart;
