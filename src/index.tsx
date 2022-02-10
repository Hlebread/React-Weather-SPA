import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";

import { store } from "./store";
import i18n from "./i18n/i18n";
import GeneralLayout from "./layouts/GeneralLayout/GeneralLayout";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <GeneralLayout>
            <App />
          </GeneralLayout>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
