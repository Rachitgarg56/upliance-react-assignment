import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const layout = () => {
  return (
    <div className='w-full h-full flex flex-col'>
        <Navbar/>
        <main className='relative w-full h-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default layout
