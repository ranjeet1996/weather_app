import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card } from '../Card/Card';
import "./ForeCast.css"
import { useContext } from 'react';
import { DatatoTransfer } from '../CreateContext';

export function ForeCast() {

    const place  =  useContext(DatatoTransfer);
    console.log(place);

    const[data,setdata] = useState([])
    
  
    const city = "delhi";
    const appkey = "bb09bc92e46d53afc0bf14ea998a6dd1";
    const unit = "metric";
    //calling api by name
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + appkey + "&units=" + unit + ""
    const getdata = async () => {
      const data = await (await axios.get(url)).data.list;

      setdata(data);
      

  }
  

  useEffect(()=>{
   getdata();
  },[])
  return (
    <>
    <div className='foreCast'> 
     {
      data.map((num)=>(
       
      
      <div className='card'>
         <h4>{num.dt_txt}</h4>
         <h5>Temp: {num.main.temp}°</h5>
         <br></br>
         <img src={"http://openweathermap.org/img/wn/" + num.weather[0].icon + "@2x.png"}></img>
         <br></br>
         {num.weather[0].description}
         <br></br>
         <span>Humidity :{num.main.humidity}</span>
     </div>

      ))
     }
        
        </div>
    </>
  )
}

