import React, { lazy , Suspense} from 'react';
import './App.css';
// import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";

// import Searchs from './pages/Searchs';

const Home = lazy(()=> import("./pages/Home"))


function App() {

  return (
    <div className="App">

      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route exact path='/' element={<Home/>}/>




        </Routes>
      </Suspense>


    </div>
  )


}

export default App;
