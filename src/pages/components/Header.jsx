import React from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../../config/firebase' 
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from 'firebase/auth'

export const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logOut = async() => {
        await signOut(auth);
    }
  return (
    <div className='bg-[#F1ECE9]'>
        <header className='flex items-center justify-between px-10 ' >
            <div className='text-xl md:text-2xl font-sans text-pink-600 font-bold cursor-pointer border-b border-pink-600' onClick={() => navigate('/')} >
                Theater<span className='text-2xl font-thin'>Show</span>
            </div>
            <div>
                <ul className='flex space-x-2 md:space-x-10 text-sm md:text-lg text-pink-600 font-semibold py-3'>
                    <li className='border-b transition duration-300 ease-in-out hover:border-b hover:border-pink-600 cursor-pointer' onClick={() => navigate('/')}>Home</li>
                    <li className='border-b transition ease-in-out hover:border-b hover:border-pink-600 cursor-pointer'onClick={() => navigate('/about')}>About</li>
                    {!user && <li className='border-b transition ease-in-out hover:border-b hover:border-pink-600 cursor-pointer' onClick={() => navigate('/login')}>Sign In</li>}
                    {user && (<><li className='border-b transition ease-in-out hover:border-b hover:border-pink-600 cursor-pointer'onClick={() => navigate('/shows')}>Shows</li>
                    <li className='border-b transition ease-in-out hover:border-b hover:border-pink-600 cursor-pointer'onClick={logOut}>Sign Out</li>
                    </>)}
                </ul>

            </div>
        </header>
    </div>
  )
}
