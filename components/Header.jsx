import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='bg-red-600 text-white px-6 py-4 shadow-md'>
        <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>
                Zomato
            </div>
            <ul className='flex space-x-6'>
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
