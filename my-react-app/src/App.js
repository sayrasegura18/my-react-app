import React,{Fragment} from 'react';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom'
import Index2 from './paginas/auth/index2';
import About from './paginas/auth/about';
import Contact from './paginas/auth/contact';
import Blog from './paginas/auth/blog';
import Petguide from './paginas/auth/petguide';
import Petmart from'./paginas/auth/petmart';
import Login from'./paginas/auth/login';
function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/"exact element={<Index2/>}></Route>
          <Route path="/about"exact element={<About/>}></Route>
          <Route path="/blog"exact element={<Blog/>}></Route>
          <Route path="/contact"exact element={<Contact/>}></Route>
          <Route path="/petguide"exact element={<Petguide/>}></Route>
          <Route path="/petmart"exact element={<Petmart/>}></Route>
          <Route path="/login"exact element={<Login/>}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;