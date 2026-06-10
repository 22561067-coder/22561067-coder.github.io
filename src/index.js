import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//import reportWebVitals from 'reportWebVitals';

//const numbers = [1, 2, 3, 4, 5];
//const listItems = numbers.map((number) => <li key={number}>{number}</li>);

  //document.getElementById('root')


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
// Mailbox unreadmessages={[]} 
//react폴더만
//챕터 9 워닝배너 실행할때 넣어라 WarningBanner warning={true}!!!!!!!!!!
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom';
//import Notification from './Notification';

//const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(
  //<React.StrictMode>
    //<BrowserRouter>
      //<Notification />
    //</BrowserRouter>
  //</React.StrictMode>
//);
