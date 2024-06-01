import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const layout = () => {
  return (
    <>
        <Navbar/>
        <main className='h-full'>
            <Outlet/>
        </main>
    </>
  )
}

export default layout
