import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import App from "./App";

const store = createStore(todoReducer);

// Render the Redux Provider with the React app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
