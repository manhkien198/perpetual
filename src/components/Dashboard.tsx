import React from 'react'
import Sidebar from './Sidebar'
import DashboardContent from './DashboardContent'

export default function Dashboard() {
  return (
    <div className='flex justify-center items-center gap-6 text-white'>
        <Sidebar/>
        <div className='grow'>
    <DashboardContent/>
        </div>
    </div>
  )
}
