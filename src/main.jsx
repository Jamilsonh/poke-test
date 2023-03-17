import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { GenEight } from './Pages/GenEight';
import { GenFive } from './Pages/GenFive';
import { GenFour } from './Pages/GenFour';
import { GenOne } from './Pages/GenOne';
import { GenSeven } from './Pages/GenSeven';
import { GenSix } from './Pages/GenSix';
import { GenThree } from './Pages/GenThree';
import { GenTwo } from './Pages/GenTwo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<GenOne />} />
          <Route path='/gentwo' element={<GenTwo />} />
          <Route path='/genthree' element={<GenThree />} />
          <Route path='/genfour' element={<GenFour />} />
          <Route path='/genfive' element={<GenFive />} />
          <Route path='/gensix' element={<GenSix />} />
          <Route path='/genseven' element={<GenSeven />} />
          <Route path='/geneight' element={<GenEight />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
