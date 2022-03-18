import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import { API_KEY } from './constants/constants';
function App() {
  const [temp,setTemp]=useState()
  function test(){
    axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=delhi`).then((response)=>{
      console.log(response);
      setTemp(response.data.current.temperature)
    })
  }
    return(
      <div className="App">
      <button onClick={test}>click</button>
      <h1>{temp}</h1>


    </div>
    )
    
  
}

export default App;
