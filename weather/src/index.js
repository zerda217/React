import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GA4React, { useGA4React } from "ga-4-react";

const ga4react = new GA4React('G-DLXW67L3KP')

function MyApp() {
  const ga = useGA4React();
  console.log(ga);
  return <></>
}

(async () => {
  await ga4react.initialize();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
