import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoApp from "./reducers";
import App from "./components/App.jsx";

const middleware = [thunk];
const store = createStore(todoApp, applyMiddleware(...middleware));
const Todo = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default Todo;
