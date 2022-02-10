import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./styles.module.scss";
import cl_basic from "../../styles.module.scss";
import useTemperatureConversion from "../../../../../../utils/useTemperatureConversion";
import { openWeatherConfig } from "../../../../../../src.config";
import { ICurrentWeather } from "../../../../../../types/weather";

interface ICurrentWeatherMain {
  weather: ICurrentWeather;
}

const CurrentWeatherMain: FC<ICurrentWeatherMain> = ({ weather }) => {
  const { t } = useTranslation();
  const { getConvertedTemperature } = useTemperatureConversion();

  const temperature = getConvertedTemperature(weather.temp);
  const feelsLike = getConvertedTemperature(weather.feels_like);
  const { icon, main } = weather.weather?.[0];
  const iconLink = icon ? `${openWeatherConfig.IMG_URL}${icon}@2x.png` : "";

  return (
    <div className={cl.component}>
      <div className={cl.temperature}>{temperature}&deg;</div>
      <img src={iconLink} alt="Weather icon" className={cl.icon} />
      <div className={cl.details}>
        <div>{main}</div>
        <div>
          <span className={cl_basic.secInfo}>{t("feels_like")}: </span>
          {feelsLike}
          &deg;
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherMain;
