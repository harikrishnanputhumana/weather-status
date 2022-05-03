import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Searchresult from './pages/Searchresult';
import Footer from './footer/Footer';
import Contactus from './pages/Contactus';



function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Search' element={<Searchresult/>}/>
        <Route path='/Contact' element={<Contactus/>}/>
      </Routes>




      <Footer/>
    </div>
  )


}

export default App;
