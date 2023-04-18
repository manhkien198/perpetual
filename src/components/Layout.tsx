import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='bg-[#1E1E1E]  px-[28px] pb-[44px] pt-4 overflow-hidden'>
    <Header />
    <Outlet/>
  </div>
  )
}
