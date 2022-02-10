import React, { FC } from "react";

import cl from "./styles.module.scss";
import { useAppSelector } from "../../../../store";

import {
  CurrentWeatherTitle,
  CurrentWeatherMain,
  CurrentWeatherDescription,
} from "./components";

const CurrentWeather: FC = () => {
  const weather = useAppSelector((state) => state.weather.current);

  return (
    <div className={cl.component}>
      <CurrentWeatherTitle location={weather.city} updated={weather.updated} />
      <CurrentWeatherMain weather={weather} />
      <CurrentWeatherDescription
        humidity={weather.humidity}
        windSpeed={weather.wind_speed}
        pressure={weather.pressure}
      />
    </div>
  );
};

export default CurrentWeather;
