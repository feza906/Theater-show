
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {signInWithPopup} from 'firebase/auth';
import {auth,provider} from '../config/firebase'
import { useNavigate } from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  const sign = async () => {
    const result = await signInWithPopup(auth,provider);
    console.log(result);
    navigate('/')
  }
  return (
    <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 '>
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="image2" className='w-full rounded-2xl' />
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
      <button type='submit'
      onClick={sign} 
      className='flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 transition ease-in-out'>
        <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
        Continue with Google</button>   
      </div>
      </div>
    </section>
  )
}
