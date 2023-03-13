import React from "react";
import { render } from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import reportWebVitals from "./reportWebVitals";
import { stripePromise } from "./utils/stripe/stripe.utils";

import { store, persistor } from "./store/store";
import "./index.scss";

const rootElement = document.getElementById("root");
// by wrapping the App in the browser router there are some implementations that we are allowing the brower router to handle for us like keepng track of previous navigations
render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
