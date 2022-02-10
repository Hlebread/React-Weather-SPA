import React, { FC, useState } from "react";
import classNames from "classnames/bind";

import cl from "./styles.module.scss";
import useTemperatureConversion from "../../../../../../utils/useTemperatureConversion";
import { openWeatherConfig } from "../../../../../../src.config";
import { IForecastDayWeather } from "../../../../../../types/weather";

import { ForecastDayMore, ForecastDayPreview } from "..";

const cx = classNames.bind(cl);

interface IFDay {
  date: { date: number; month: string; dayName: string };
  weather: IForecastDayWeather;
}

const ForecastDay: FC<IFDay> = ({ date, weather }) => {
  const { getConvertedTemperature } = useTemperatureConversion();
  const [active, setActive] = useState(false);
  const clickHandler = () => setActive((prevValue) => !prevValue);

  const temperatureDay = getConvertedTemperature(weather.temp.day);
  const temperatureNight = getConvertedTemperature(weather.temp.night);
  const windSpeed = Math.round(weather.wind_speed);
  const probabilityOfPrecipitation = Math.round(weather.pop * 100);
  const cloudiness = weather.clouds;
  const icon = `${openWeatherConfig.IMG_URL}${weather.weather[0].icon}.png`;

  return (
    <li
      className={cx({
        component: true,
        component_active: active,
      })}
      onClick={clickHandler}
    >
      <ForecastDayPreview
        date={date}
        tempDay={temperatureDay}
        tempNight={temperatureNight}
        icon={icon}
      />
      <ForecastDayMore
        weather={{
          humidity: weather.humidity,
          pressure: weather.pressure,
          wind: windSpeed,
          pop: probabilityOfPrecipitation,
          clouds: cloudiness,
          uv: weather.uvi,
        }}
      />
    </li>
  );
};

export default ForecastDay;
