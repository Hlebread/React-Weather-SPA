import { createActionCreator } from "deox";
import { Dispatch } from "redux";

import OpenWeather from "../../api/OpenWeather";
import { IOpenWeather } from "../../types/weather";

/**
 *
 * 	THUNKS
 *
 */

const _fetchWeatherThunk =
  (pos: GeolocationPosition) => async (dispatch: Dispatch) => {
    dispatch(fetchWeather.request());

    try {
      const weather = await OpenWeather.get(pos);
      dispatch(fetchWeather.success(weather));
    } catch (errorMessage) {
      dispatch(
        fetchWeather.failure(
          typeof errorMessage === "string"
            ? errorMessage
            : "Oops, loading error"
        )
      );
    }
  };

/**
 *
 * 	ACTIONS
 *
 */

export const fetchWeather = Object.assign(_fetchWeatherThunk, {
  request: createActionCreator("SET_IS_LOADING"),
  success: createActionCreator(
    "SET_WEATHER",
    (resolve) => (weather: IOpenWeather) => resolve(weather)
  ),
  failure: createActionCreator(
    "SET_ERROR",
    (resolve) => (errorMessage: string) => resolve(errorMessage)
  ),
});

export const setGeoposition = createActionCreator(
  "SET_GEOPOSITION",
  (resolve) => (pos: GeolocationPosition) => resolve(pos)
);
