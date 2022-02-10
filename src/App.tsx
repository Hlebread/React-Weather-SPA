import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import Firebase from "./api/Firebase";
import i18n from "./i18n/i18n";

import AppRouter from "./routes/AppRouter";
import { useAppSelector } from "./store";
import { setSettingsAction } from "./store/actions/settings";
import {
  getSettingsFromLocalStorage,
  setSettingsToLocalStorage,
} from "./utils/localStorage";

const App: FC = () => {
  const dispatch = useDispatch();
  const settings = useAppSelector((state) => state.settings);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  const locale = settings.locale;
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  useEffect(() => {
    const data = getSettingsFromLocalStorage();
    if (data) {
      dispatch(setSettingsAction(data));
    }
  }, [dispatch]);

  useEffect(() => {
    const setSettings = async () => {
      if (isAuthorized) {
        try {
          await Firebase.updateSettings(settings);
        } catch (err) {
          console.log("Error!", err);
        }
      }
      setSettingsToLocalStorage(settings);
    };

    setSettings();
  }, [settings, isAuthorized]);

  return <AppRouter />;
};

export default App;
