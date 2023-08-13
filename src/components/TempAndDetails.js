import React from 'react'
import { UilTemperature, UilWind, UilTear, UilSun, UilSunset } from '@iconscout/react-unicons'


const TempAndDetails = (props) => {
  return (
    <div className='container'>
      <div className="sky flex items-center justify-center text-xl text-cyan-300 ">{props.data.condition.text}</div>

      <div className="temp flex flex-row items-center justify-between text-white py-3">
        <img src={props.data.condition.icon} alt="" />
        <p className='text-5xl  '>{props.unit === "C" ? props.data.temp_c: props.data.temp_f}°</p>

        <div className="extra-details flex flex-col space-y-2">
          <div className="icons-details items-center  flex flex-row text-light text-sm font-light ">
            <UilTemperature size={18} /> <span className='font-light ml-1'>Real fell:</span>
            <span className='ml-1 font-medium'>{props.unit === "C" ? props.data.feelslike_c.toFixed(): props.data.feelslike_f.toFixed()}°{props.unit}</span>
          </div>
          <div className="icons-details items-center flex flex-row text-light text-sm font-light ">
            <UilWind size={18} /> <span className='font-light ml-1'>Wind Speed:</span>
            <span className='ml-1 font-medium'>{props.unit === "C" ? props.data.wind_kph+" kph": props.data.wind_mph+" mph"} </span>
          </div>
          <div className="icons-details items-center  flex flex-row text-light text-sm font-light ">
            <UilTear size={18} /> <span className='font-light ml-1'>Humidity:</span>
            <span className='ml-1 font-medium'>{props.data.humidity}%</span>
          </div>
        </div>
      
      </div>
      <div className="container">
        <div className="tempContainer flex flex-row items-center justify-center space-x-2 text-white text-sm  py-6 ">
          <UilSun/><p className='font-light'>Rise: <span className='font-medium ml-1'>{props.forecast.forecastday[0].astro.sunrise}</span></p>
          <p className='font-light'>|</p>
          <UilSunset/><p className='font-light'>Set: <span className='font-medium ml-1'>{props.forecast.forecastday[0].astro.sunset}</span></p>
          <p className='font-light'>|</p>
          <UilSun/><p className='font-light'>High: <span className='font-medium ml-1'>{props.unit === "C" ? props.forecast.forecastday[0].day.maxtemp_c : props.forecast.forecastday[0].day.maxtemp_f}°</span></p>
          <p className='font-light'>|</p>
          <UilSun/><p className='font-light'>Low: <span className='font-medium ml-1'>{props.unit==="C" ? props.forecast.forecastday[0].day.mintemp_c : props.forecast.forecastday[0].day.mintemp_f}°</span></p>
        </div>

      </div>
    </div>
  )
}

export default TempAndDetails;