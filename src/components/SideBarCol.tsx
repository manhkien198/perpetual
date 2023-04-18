import React from 'react'
interface SideBarColProps{
    title:string;
    children:string[]
}
export default function SideBarCol({title,children}:SideBarColProps) {
  return (
    <div className='flex flex-col items-start'>
        <p className='text-sm uppercase text-[#4ab081] ml-3 mb-6'>{title}</p>
        <div className='flex flex-col gap-6'>
        {children.map(child =>(
            <button className='text-left text-sm hover:bg-[#ffffff7f] hover:rounded-3xl ease-in-out duration-200 py-2 px-3'>{child}</button>
        ))}
        </div>
    </div>
  )
}
