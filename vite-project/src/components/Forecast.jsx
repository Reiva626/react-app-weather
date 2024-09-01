import React from 'react'

const Forecast = ({ title, data }) => {

  return (
    <div>
        <div className='flex items-center justify-start my-6'>
            <p className='font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-1'/>

        <div className='flex justify-between items-center'>
            {data.map((d, index) => (
                <div 
                key={index} 
                className='flex flex-col items-center justify-center'
                >
                    <p className='font-light text-sm'>{d.title}</p>
                    <img 
                    src= {d.icon}
                    alt="" 
                    className='w-12 my-1'
                    />
                    <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Forecast