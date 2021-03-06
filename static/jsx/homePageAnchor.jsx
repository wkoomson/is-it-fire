// get css files
//require('../css/file.css');

import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './pages/homePage.jsx';

let mountNode = document.getElementById("mount-point");

ReactDom.render(
  <HomePage app_props = { window.APP_PROPS }/>,
  mountNode
);