import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import App from "./App";
import rootReducer from "./reducers";
import 'bootstrap/dist/css/bootstrap.min.css';



let store = createStore(rootReducer, {}, applyMiddleware(logger));

render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>, document.getElementById("root")
);
