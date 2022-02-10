import { createReducer } from "deox";
import {
  setLocaleAction,
  setSettingsAction,
  setThemeAction,
  setUnitsAction,
} from "../actions/settings";

export interface ISettingsState {
  units: string;
  locale: string;
  theme: string;
}

export const defaultState: ISettingsState = {
  units: "celsius",
  locale: "en",
  theme: "main",
};

export const settingsReducer = createReducer(defaultState, (handleAction) => [
  handleAction(setUnitsAction, (state, { payload }) => ({
    ...state,
    units: payload,
  })),
  handleAction(setLocaleAction, (state, { payload }) => ({
    ...state,
    locale: payload,
  })),
  handleAction(setThemeAction, (state, { payload }) => ({
    ...state,
    theme: payload,
  })),
  handleAction(setSettingsAction, (state, { payload }) => payload),
]);
