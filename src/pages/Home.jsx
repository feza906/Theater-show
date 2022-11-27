import React from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../config/firebase' 
import {useAuthState} from "react-firebase-hooks/auth"

export const Home = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  return (
    <div className='mx-20 my-20'>
      {user && <p className='text-xl font-mono text-pink-600'>Hey,{user.displayName}</p>}
      <h1 className='text-2xl font-serif font-semibold mb-2'>Book Your Theater-Show.</h1>
      <p className='text-xl font-mono text-pink-600'>Enjoy all our Theater shows. Drama,Comedy,tragedy and what not?</p>
      {user? <p className='text-xl mt-2 font-serif font-semibold'>Get access to all the available shows, Click below to get started.</p>:<p className='text-xl mt-2 font-serif font-semibold'>Login, and get access to all the available shows.</p>}

      {user? <button className='mt-4 border-2 border-pink-600 py-1 px-5 font-bold hover:bg-pink-400 hover:border-pink-400 transition ease-in-out' onClick={() => navigate('/shows')}>Shows</button> : <button className='mt-4 border-2 border-pink-600 py-1 px-5 font-bold hover:bg-pink-400 hover:border-pink-400 transition ease-in-out' onClick={() => navigate('/login')}>Login</button>}
    </div>
  )
}
