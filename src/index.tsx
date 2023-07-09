import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pinyin from './pages/Pinyin';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {Error} from "./components/Error";
import {Hanzi} from "./pages/Hanzi";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Pinyin/>}></Route>
                <Route path='/pinyin' element={<Pinyin/>}></Route>
                <Route path='/hanzi' element={<Hanzi />}></Route>
                <Route path='*' element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
