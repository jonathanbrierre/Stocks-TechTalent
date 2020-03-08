import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import combined from './Reducers/index'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(combined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store ={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));


