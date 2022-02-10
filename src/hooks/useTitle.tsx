import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

const useTitle = (title: string) => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    document.title = t(title);
  }, [t, title]);
};

export default useTitle;
