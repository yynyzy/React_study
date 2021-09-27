//引入react核心库
import React from 'react';
//引入react-dom
import ReactDOM from 'react-dom';

//引入App根组件
import App from './App.jsx';
//引入，用于分析页面性能
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
  , document.getElementById('root')
);
// reportWebVitals();
