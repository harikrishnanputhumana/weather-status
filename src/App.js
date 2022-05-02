import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Searchresult from './pages/Searchresult';



function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Search' element={<Searchresult/>}/>
      </Routes>





    </div>
  )


}

export default App;
