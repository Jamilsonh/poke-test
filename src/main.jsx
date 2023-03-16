import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { GenFour } from './GenFour';
import { GenThree } from './GenThree';
import { GenTwo } from './GenTwo';
import { Home } from './Home';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/gentwo' element={<GenTwo />} />
          <Route path='/genthree' element={<GenThree />} />
          <Route path='/genfour' element={<GenFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
