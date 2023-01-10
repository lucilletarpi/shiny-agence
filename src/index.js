import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Error from './components/Error';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Results from './pages/Results';
import Freelances from './pages/Freelances';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
          <Routes>
              <Route 
                path='/' element={<Home />}>
              </Route>

              <Route 
                path='/survey/:questionNumber' element= {<Survey />}> 
              </Route>

              <Route 
              path='/freelances' element = {<Freelances />}>
              </Route>

              <Route 
              path='/results' element={<Results />}>
              </Route>

              <Route 
              path='*' element={<Error />}>
             </Route>

          </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)