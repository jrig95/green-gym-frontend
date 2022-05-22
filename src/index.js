import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";
import ReactDOM from "react-dom/client";

import APIErrorNotification from "./components/UI/APIErrorNotification";
import APIErrorProvider from "./context/APIErrorProvider";
import { queryClient } from "./react-query/queryClient";
import "./index.css";
import App from "./App";

// the following code is related to language detection and change.
// do not move from index.js
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "cn"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    // Is this needed?
    // react: { useSuspense: false }
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <APIErrorProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
      <APIErrorNotification />
    </APIErrorProvider>
  </React.StrictMode>
);
