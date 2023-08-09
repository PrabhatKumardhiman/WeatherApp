import React from 'react'
import "./Hourly.css"

const Hourly = (props) => {

 
  return (
    <div>
      <div className="flex items-center justify-start mt-6 mb-0">
        <p className='text-white font-medium uppercase'>
          {props.title}
        </p>
      </div>
      <div>
        <hr className='my-2' />
      </div>

      <div className="weather-details flex flex-row items-center justify-between text-white "  >
        {props.forecast.forecastday[0].hour.map((item) =>
          <div key = {item.time_epoch} className="flex flex-col items-center justify-center font-light text-sm mx-2">
            <p>{item.time.slice(11)}</p>
            <img src={item.condition.icon} alt="" className='w-12 h-10 ' />
            <p className='font-medium'>{props.unit === "C" ? item.temp_c : item.temp_f}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hourly