import React from 'react'

function TopButton(props) {
  const cities = [
    {
      id : 1,
      city : 'Delhi'
    },

    {
      id : 2,
      city : "Haridwar"
    },

    {
      id : 3,
      city : 'Dehradun'
    },

    {
      id : 4,
      city : 'Hyderabad'
    },

    {
      id : 5,
      city : 'Bangalore'
    }

  ]
  return (
    <div className=' flex items-center justify-around my-6'>
      {cities.map((element)=>
      <button key = {element.id} onClick = {() => props.setQuerry(element.city ==="Delhi" ? "New Delhi" : element.city)} className="btn text-white text-lg font-medium transition ease-out hover:scale-125">{element.city}</button>
      )}
    </div>
  )
}

export default TopButton