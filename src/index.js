import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cartContext";
import { UserProvider } from "./context/user.context";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// by wrapping the App in the browser router there are some implementations that we are allowing the brower router to handle for us like keepng track of previous navigations
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
