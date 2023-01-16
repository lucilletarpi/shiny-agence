import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import { ThemeProvider, SurveyProvider } from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <SurveyProvider>
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
           <Footer />
           </SurveyProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)