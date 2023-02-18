import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import "./WeatherCard.css"

export function WeatherCard({ place }) {

    const [citydata, setCitydata] = useState({});
    const city = place;
    const appkey = "bb09bc92e46d53afc0bf14ea998a6dd1";
    const unit = "metric";
    //calling api by name
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appkey + "&units=" + unit + ""



    const getdata = async () => {
        const data = await axios.get(url);
        const newobj = {
            "temp": data.data.main.temp,
            "description": data.data.weather[0].description,
            "img": "http://openweathermap.org/img/wn/" + data.data.weather[0].icon + "@2x.png",
            "hightemp": data.data.main.temp_max,
            "lowtemp": data.data.main.temp_min,
        }
        setCitydata(citydata => ({
            ...citydata, ...newobj
        }));

    }




    useEffect(() => {
        getdata();
    }, [place])



    return (
        <div className='Weathercard'>
            <h4>{place}</h4>
            {citydata.temp}°
            <br></br>
            {<img src={citydata.img}></img>}
            <br></br>
            {citydata.description}
            <br></br>
            <span>H:</span>{citydata.hightemp}°
            <span>L:</span>{citydata.lowtemp}°
        </div>
    )
}

