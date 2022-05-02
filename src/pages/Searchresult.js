import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/Context'
import { WiRain } from "weather-icons-react";
import { WiDaySunny } from "weather-icons-react";
import { WiDayHaze } from "weather-icons-react";
import { WiDust } from "weather-icons-react";
import { WiFog } from "weather-icons-react";
import Details from './Details';





function Searchresult() {
    const {searchValue}=useContext(AuthContext)
    const data= searchValue.current.weather_descriptions
    const temp=searchValue.current.temperature
    // const data="sunny"
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
    }
    
  return (
    <div>
        <Details/>
        <h2>{temp}C°</h2>
        <div>{details}</div>


    </div>
  )
}

export default Searchresult