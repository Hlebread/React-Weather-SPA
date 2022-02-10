import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import cl from "./styles.module.scss";
import useTitle from "../../hooks/useTitle";

import { SettingsBlock, ThemesSelector, LocaleSettings } from "./components";

const AppSettings: FC = () => {
  useTitle("settings");
  const { t } = useTranslation();

  return (
    <main className={cl.component}>
      <SettingsBlock title={t("themeSettings")}>
        <ThemesSelector />
      </SettingsBlock>
      <LocaleSettings />
    </main>
  );
};

export default AppSettings;
