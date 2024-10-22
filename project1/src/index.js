import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login'; //import functions 
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import ProfilePage from './ProfilePage'

import {BrowserRouter,Routes,Route} from 'react-router-dom' //import is must

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/login" Component={Login}/>
    <Route path="/signup" Component={Signup}/>
    <Route path="/forgotpassword" Component={ForgotPassword}/>
    <Route path="/profilepage" Component={ProfilePage}/>
    <Route path="/" Component={App}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
