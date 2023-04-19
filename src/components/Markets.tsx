import React from 'react'
import { Button } from './Button'
import Table from './Table'
import { marketHeader } from '../constans'

export default function Markets() {
  return (
    <div className='flex flex-col gap-4'>
    <div className="flex justify-start gap-4 items-center">
    <Button top={<p>Futures Markets</p>} active center/>
    </div>
    <div className='rounded-3xl overflow-x-auto'>
        <Table header={marketHeader} nodata={<p></p>}/>
      </div>
  </div>
  )
}
