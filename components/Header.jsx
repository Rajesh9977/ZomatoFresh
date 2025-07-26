import React from 'react'

function Header() {
  return (
    <nav className='bg-red-600 text-white px-6 py-4 shadow-md'>
        <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold'>
                Zomato
            </div>
            <ul className='flex space-x-6'>
                <li className='hover:text-gray-300'>Home</li>
                <li className='hover:text-gray-300'>Contact</li>
                <li className='hover:text-gray-300'>About</li>
                <li className='hover:text-gray-300'>Cart</li>

            </ul>

        </div>

    </nav>
  )
}

export default Header
