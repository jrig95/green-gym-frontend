import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome_to_react": "Welcome to React!",
      },
    },
    cn: {
      translation: {
        "welcome_to_react": "Chinese Translation",
      },
    },
  },
  lng: "en",
  fallbackLng: "en"
});

// Use translation hook call
const { t } = useTranslation();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
