import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/authReducer";
import { settingsReducer } from "./reducers/settingsReducer";
import { weatherReducer } from "./reducers/weatherReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  weather: weatherReducer,
  settings: settingsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore(rootReducer, applyMiddleware(thunk));
