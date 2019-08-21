import React from 'react';
import ReactDOM from 'react-dom'
import ReactTestComponent from './../src/index'

const root = document.createElement("div");
window.document.body.appendChild(root);
ReactDOM.render(<ReactTestComponent />, root);