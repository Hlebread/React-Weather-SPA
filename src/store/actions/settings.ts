import { createActionCreator } from "deox";

import { ISettingsState } from "../reducers/settingsReducer";

/**
 *
 * 	ACTIONS
 *
 */

export const setSettingsAction = createActionCreator(
  "SET_SETTINGS",
  (resolve) => (settings: ISettingsState) => resolve(settings)
);

export const setUnitsAction = createActionCreator(
  "SET_UNITS",
  (resolve) => (text: string) => resolve(text)
);

export const setLocaleAction = createActionCreator(
  "SET_LOCALE",
  (resolve) => (text: string) => resolve(text)
);

export const setThemeAction = createActionCreator(
  "SET_THEME",
  (resolve) => (text: string) => resolve(text)
);
