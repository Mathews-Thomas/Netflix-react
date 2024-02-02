import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Finish from '../components/Registration';
import Finish1 from '../components/Registrationone';
import Main from '../components/Main';

const AppRouter = () => {
    return (
      <Router>
        <div>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/finish'element={<Finish/>}/>
            <Route path='/finish1'element={<Finish1/>}/>
            <Route path='/main'element={<Main/>}/>
          </Routes>
         
        </div>
      </Router>
    );
  };
  
  export default AppRouter;