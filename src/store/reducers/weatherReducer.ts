import { createReducer } from "deox";
import { ICurrentWeather, IForecastDayWeather } from "../../types/weather";
import { fetchWeather, setGeoposition } from "../actions/weather";

interface IWeatherState {
  current: ICurrentWeather;
  forecast: IForecastDayWeather[];
  position: GeolocationPosition | null;
  isLoading: boolean;
  error: null | string;
}

const defaultState: IWeatherState = {
  current: {} as ICurrentWeather,
  forecast: [] as IForecastDayWeather[],
  position: null,
  isLoading: true,
  error: null,
};

export const weatherReducer = createReducer(defaultState, (handleAction) => [
  handleAction(fetchWeather.request, (state) => ({
    ...state,
    isLoading: true,
  })),
  handleAction(
    fetchWeather.success,
    (state, { payload: { current, daily } }) => ({
      ...state,
      current: current,
      forecast: daily,
      isLoading: false,
    })
  ),
  handleAction(fetchWeather.failure, (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  })),
  handleAction(setGeoposition, (state, { payload }) => ({
    ...state,
    position: payload,
  })),
]);
