import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import store from './Store/Store';
import firebase_conf from "./Config/firebase-conf"
import * as serviceWorker from './serviceWorker';


import $ from "jquery"
import Popper from "popper.js"
import iziModal from "izimodal/js/iziModal.min"
import "bootstrap/dist/js/bootstrap.min"
import "bootstrap/dist/js/bootstrap.bundle.min"

import animate from "animate.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "izimodal/css/iziModal.min.css"
import "font-awesome/css/font-awesome.min.css"

$.fn.iziModal = iziModal;



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
