// import './App.css';
import AppRouter from "./router/AppRouter";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { RootReducer } from "./redux/RootReducer";
import React from "react";

const store = createStore(RootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
