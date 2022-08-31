import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/Inter-Bold.ttf";
import "./assets/fonts/Inter-Medium.ttf";
import "./assets/fonts/Inter-Regular.ttf";
import "./assets/fonts/Inter-SemiBold.ttf";
import {Provider} from "react-redux";
import store from "./redux/store";

// optional configuration



ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();