import React, {useState} from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Input(props) {
  const handleCelciusClick =() => {
    props.setUnit("C")
  }
  const handleFeranhiteClick =() => {
   props.setUnit("F")
 }

 const [value, setValue] = useState("")

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className="search flex flex-row w-2/4 items-center justify-center space-x-4">
        <input type="text" value = {value} onChange = {(e) => setValue(e.target.value)} name="search" id="search" className='text-xl font-light p-2 w-full shadow-xl focus:outline-none rounded-xl capitalize placeholder:capitalize' placeholder='Enter A city name...' />
        <UilSearch size={25} onClick = {() => props.setQuerry(value)} className='text-white cursor-pointer transition ease-out hover:scale-125 ' />
        <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125 ' />
      </div>
      <div className="temp-unit flex flex-row w-1/4 items-center justify-center text-center text-white font-light">
      <button name='celcius' onClick = {handleCelciusClick} className='text-xl cursor-pointer transition ease-out hover:scale-125'>°C</button >
      <p className='text-xl  mx-1' >|</p>
      <button name='farenhite' onClick = {handleFeranhiteClick} className='text-xl cursor-pointer transition ease-out hover:scale-125'>°F</button >
      </div>
    </div>  
  )
}

export default Input