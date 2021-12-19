// import './App.css';
// import AppRouter from './router/AppRouter'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { RootReducer } from './redux/RootReducer'
import React from 'react';
import Navbar from './components/Navbar'
import Posts from './data/Posts'

const store = createStore(RootReducer, applyMiddleware(thunk))
function App() {
  return (

    <Provider store={store}>

    <div>

    <Navbar/>
    <Posts/>
    </div>
    </Provider>
  );
}

export default App;
