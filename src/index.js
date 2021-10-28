import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StyledProvider } from "./context/StyledContext";
import { AppProvider } from "./context/AppContext";
import { Provider } from "react-redux";
import { store } from "./_redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <AppProvider>
      <StyledProvider>
        <App />
      </StyledProvider>
    </AppProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
