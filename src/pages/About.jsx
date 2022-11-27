import React from 'react'
import { useNavigate } from 'react-router'

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className='ml-20 mt-16'>
      <h1 className='text-2xl text-pink-600'>About-TheaterShow</h1>
      <p className='mt-4 text-xl font-mono'>This website is made for all the theater-show lovers. This website is easy to navigate. You can browse all the Theater-shows available by simply signing with your Google account. <br/>We will be informing you about all the types of shows that are being hosted in our theater.</p>
      <ul className='mt-6 text-xl list-disc'>
        <h1 className='text-pink-600'>Our Platform includes shows like :</h1> 
        <li>Tragedy</li>
        <li>Cultural</li>
        <li>Comedy</li>
        <li>History and more..</li>

      </ul>
      <button className='mt-4 border-2 border-pink-600 py-1 px-5 font-bold hover:bg-pink-400 hover:border-pink-400 transition ease-in-out' onClick={() => navigate('/shows')}>Shows</button>

    </div>
  )
}
