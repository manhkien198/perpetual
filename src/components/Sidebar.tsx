import React from 'react'
import SideBarCol from './SideBarCol'

export default function Sidebar() {
  return (
    <div>
        <div className='mb-14'>
        <SideBarCol title='Trading' children={['Overview','History','Markets']}/>
        </div>
        <div>
        <SideBarCol title='Community' children={['Staking']}/>
        </div>
    </div>
  )
}
