import React, { useContext, useEffect, useState } from 'react'
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import "./Home.css"
import {useNavigate} from "react-router-dom"
import { DatatoTransfer } from '../../components/CreateContext';



export function Home() {
       
    const navigate = useNavigate();

    const {state,setState} = useContext(DatatoTransfer)
    
    const ChangeValue = (event) => {

        setState(event.target.value);
    }

    const HandelClick = ()=>{
        navigate("/forecast");
    }
    return (
        <DatatoTransfer.Provider value={{state}}>
        <div className='home'>
            <input type="text" placeholder='Enter Your City Name' value={state} onChange={ChangeValue}></input>
            <button onClick={HandelClick}>Fetch Data</button>
         <div className='weathercard'>
         <WeatherCard place={state}></WeatherCard>
         </div>
           
        </div>
        </DatatoTransfer.Provider>

    )
}
