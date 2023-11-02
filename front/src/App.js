import React,{Fragment} from 'react';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Carrusel from './paginas/auth/carrusel';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/"exact element={<Carrusel/>}>
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;