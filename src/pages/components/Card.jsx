import React from 'react'

export const Card = (props) => {
  return (
    <div className='mb-2 text-center'>
        <div style={{backgroundImage: `url(${props.backgroundImage})`}} className='border-2 w-96 h-72 mr-2 rounded-lg bg-cover mx-auto max-w-6xl transition ease-in-out duration-1000 hover:h-80'></div>
        <h1 className='text-xl font-serif font-semibold'>{props.name}</h1>
        
    </div>
  )
}
