import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Authorization from './Components/Authorization/Authorization'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import App from './App'

ReactDOM.render(
    <Router>
      <App/> 
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// <Routes>
//        <Navigate to="/authorization" state={{ from: location }} replace />;
//         <Route path="/" element={<Authorization/>} />
//       //  </Routes>