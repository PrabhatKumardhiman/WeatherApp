import React from 'react'

const TimeAndLocation = (props) => {
  return (
  <div>
    <div className=' flex items-center justify-center my-6'>
      <p className="text-white text-xl font-extralight "> {props.location.localtime.slice(0,11)} | Local Time: {props.location.localtime.slice(11)} </p>
    </div>
    <div className="flex items-center justify-center my-3">
      <p className='text-white text-3xl font-medium'>{props.location.name}, {props.location.country.slice(0,2).toUpperCase()}</p>
    </div>
    </div>
  )
}

export default TimeAndLocation