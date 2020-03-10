import React from 'react';
import ReactDOM ,{render}from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';


import {Provider} from "react-redux"
import store from "./scripts/redux/store.js"
import "./styles/index.scss"

import {MainRouter} from "./scripts"

const hotRender=()=>{
    render(
        <Provider store={store}>
             <MainRouter />
        </Provider>,
       
        document.getElementById("root")
    )
}


hotRender();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
