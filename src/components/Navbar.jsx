import React from 'react'

const Navbar = () => {
  return (
    <header className='text-black flex justify-between py-6 px-3 bg-white shadow-md shadow-gray-200'>
        <h1 className='font-bold'>Where in the world?</h1>
        <button className='flex gap-2 font-semibold items-center'>
            <i className='bx bx-moon'></i>
            <span>Dark Mode</span>
        </button>
    </header>
  )
}

export default Navbar