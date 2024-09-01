import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";

import React, { useState } from 'react'

const inputs = ({setQuery, setUnits}) => {


    const [city, setCity] = useState("");

    const hadleSearchClick = () => {
        if(city !== "") setQuery({ q: city });
    };

    const handleLocationClick = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords
                setQuery({lat: latitude, lon: longitude})
            })
        }
    }
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center 
        space-x-4'>
            <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
             type="text" name="" id="" placeholder='search by citty'
            className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'
            />

            <CiSearch
            size={30} className="cursor-pointer transition ease-out 
            hover:scale-125" onClick={hadleSearchClick}
            />

            <FaLocationCrosshairs 
            size={30} className="cursor-pointer transition ease-out 
            hover:scale-125" onClick={handleLocationClick}
            />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out
            hover:scale-125" onClick={() => setUnits("metric")}>
                °C
            </button>
            <p className="text-2xl font-medium mx-1"> | </p>
            <button className="text-2xl font-medium transition ease-out
            hover:scale-125" onClick={() => setUnits("imperial")}>
                °F
            </button>
        </div>
    </div>
  )
}

export default inputs;