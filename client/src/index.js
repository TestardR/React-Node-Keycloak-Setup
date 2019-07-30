import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import Keycloak from "keycloak-js";
import axios from "axios";
import { Provider } from "react-redux";

const kc = new Keycloak("/keycloak.json");
kc.init({ onLoad: "login-required", promiseType: "native" }).then(
  authenticated => {
    if (authenticated) {
      store.getState().keycloak = kc;
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById("root")
      );
    }
  }
);

axios.interceptors.request.use(config =>
  kc
    .updateToken(5)
    .then(() => {
      config.headers.Authorization = "Bearer " + kc.token;
      return Promise.resolve(config);
    })
    .catch(kc.login)
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
