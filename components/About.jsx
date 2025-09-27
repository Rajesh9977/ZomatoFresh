import React from 'react'
import UserCard from './UserCard'

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center">
        <img
          src="/images/RajeshNandini.jpg" // <-- place your image inside public/images folder
          alt="Favorite Person"
          className="w-40 h-40 object-cover rounded-full mx-auto shadow-md mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">My Love Nandini Koiri</h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Nandu I really love baby, I need you, I want you, I wish you too love me in the same way I do 💕
          Don't make me jealous all time I really feel jealous 😒
          Nandu baby I really wanna marry you. 💖
          Love you Vaishu 💋
        </p>
      </div>
    </div>
  )
}

export default About
