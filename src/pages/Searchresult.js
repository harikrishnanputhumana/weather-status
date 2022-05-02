import React, { useContext, useState } from 'react'
import './Searchresult.css'
import { AuthContext } from '../context/Context'
import { WiRain } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiDayHaze } from "weather-icons-react";
import { WiDust } from "weather-icons-react";
import { WiFog } from "weather-icons-react";
import { WiCloudy} from "weather-icons-react";

import Details from './Details';





function Searchresult() {
    const {searchValue}=useContext(AuthContext)
    const data= searchValue.current.weather_descriptions
    const temp=searchValue.current.temperature
    const humidity=searchValue.current.humidity
    const pressure=searchValue.current.pressure
    const location=searchValue.location.name
    
    // const data="Clear"
    let details
    if(data=="Light Rain"){
        details= <div><WiRain size={150} color='#fff' /></div>
    }else if(data=="Sunny"){
        details= <div><WiDaySunny size={150} color='#fff' /></div>
    }else if(data=="Haze"){
        details= <div><WiDayHaze size={150} color='#fff' /></div>
    }else if(data=="Blowing Widespread Dust"){
        details= <div><WiDust size={150} color='#fff' /></div>
    }else if(data=="Mist"){
        details= <div><WiFog size={150} color='#fff' /></div>
    }else if(data=="Fog"){
        details= <div><WiFog size={150} color='#fff' /></div>
    }else if(data=="Rain"){
        details= <div><WiRain size={150} color='#fff' /></div>
    }else if(data=="Partly cloudy"){
        details= <div><WiCloudy size={150} color='#fff' /></div>
    }else if(data=="Cloudy"){
        details= <div><WiCloudy size={150} color='#fff' /></div>
    }else if(data=="Clear"){
        details= <div><WiDaySunny size={150} color='#fff' /></div>
    }
    
  return (
    <div>
        <Details/>
        <div className="box">
        <p>{location}</p>
        <h2>{temp}C°</h2>

        <h3>{data}</h3>
        <div>{details}</div>
        <h5>H : {humidity}</h5>
        <h5>{pressure}Pa</h5>
        </div>


    </div>
  )
}

export default Searchresult