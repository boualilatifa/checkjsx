import React from 'react'

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Adresse from './components/Adresse';
import FullName from './components/FullName';
import Profile from './components/Profile';




function App() {
  
  return (
    <div className="wrapper">
      
    <Navbarr/>
    
    
    <Profile/>
    <FullName/>
    <Adresse/>
    </div>
  )
}

export default App;