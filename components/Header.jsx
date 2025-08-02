import React from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

function Header() {
  const onlineStatus = useOnlineStatus();
  return (
    <nav className='bg-red-600 text-white px-6 py-4 shadow-md'>
        <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>
            <Link to='/' className='hover:text-gray-300'>Zomato</Link>
            </div>
            <ul className='flex space-x-6'>
                <li>Online Status: {onlineStatus ? "Yes": "No"}</li>
                <Link to='/' className='hover:text-gray-300'>Home</Link>
                <Link to='/contact' className='hover:text-gray-300'>Contact</Link>
                <Link to='/about' className='hover:text-gray-300'>About</Link>
                <Link to='/cart' className='hover:text-gray-300'>Cart</Link>

            </ul>

        </div>

    </nav>
  )
}

export default Header
