import React from 'react'

const Forcast = (props) => {
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
      <div className="weather-details flex flex-row items-center justify-between text-white">
        {props.forecast.forecastday.map((item) =>
          <div key = {item.date_epoch} className="flex flex-col items-center justify-center font-light text-sm">
            <p>{item.date.slice(5)}</p>
            <img src={item.day.condition.icon} alt="" className='w-12 ' />
            <p className='font-medium'>{props.unit === "C" ? item.day.avgtemp_c : item.day.avgtemp_f}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Forcast