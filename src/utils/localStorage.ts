import { ISettingsState } from "../store/reducers/settingsReducer";

const key = "hlebreadmWeatherApp";

export const getSettingsFromLocalStorage = () => {
  const data = localStorage.getItem(key);
  return data && JSON.parse(data);
};

export const setSettingsToLocalStorage = (settings: ISettingsState) =>
  localStorage.setItem(key, JSON.stringify(settings));
