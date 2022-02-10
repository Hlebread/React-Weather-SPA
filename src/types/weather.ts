export interface IWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    }
  ];
  uvi: number;
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface ICurrentWeather extends IWeather {
  city: string;
  feels_like: number;
  temp: number;
  updated: Date;
  visibility: number;
}

export interface IForecastDayWeather extends IWeather {
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
}

export interface IOpenWeather {
  current: ICurrentWeather;
  daily: IForecastDayWeather[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}
