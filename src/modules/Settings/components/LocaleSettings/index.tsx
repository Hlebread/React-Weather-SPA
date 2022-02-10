import React, { FC } from "react";
import { useDispatch } from "react-redux";
import ReactSelect from "react-select";

import { setLocaleAction } from "../../../../store/actions/settings";
import { useAppSelector } from "../../../../store";
import cl from "./styles.module.scss";

import SettingsBlock from "../SettingsBlock";
import { useTranslation } from "react-i18next";

const options = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
];

const LocaleSettings: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const locale = useAppSelector((state) => state.settings.locale);

  const changeHandler = (option: { value: string; label: string }) => {
    dispatch(setLocaleAction(option.value));
  };

  const defaultValue = options.find((option) => option.value === locale);

  return (
    <SettingsBlock title={t("localeSettings")}>
      <ReactSelect
        className={cl.component}
        options={options}
        value={defaultValue}
        onChange={(option) => (option ? changeHandler(option) : null)}
      />
    </SettingsBlock>
  );
};

export default LocaleSettings;
