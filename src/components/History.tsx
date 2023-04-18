import React, { useState } from 'react'
import { firstHistoryHeader, secondHistoryHeader } from '../constans'
import Table from './Table'
import { Button } from './Button'

export default function History() {
  const [tab, setTab] = useState(1)
  const handleTab=(tabIndex:number)=>{
    setTab(tabIndex)
  }
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex justify-start gap-4 items-center">
      <Button top={<p>Futures Markets</p>} active={tab===1} center onClick={()=>handleTab(1)}/>
      <Button top={<p>Spot History</p>} active={tab===2} center onClick={()=>handleTab(2)}/>
      </div>
      {tab === 1 && (
        <div className='rounded-3xl overflow-x-auto'>
          <Table header={firstHistoryHeader} nodata={<div className='no-data'>
              Perpetual futures are available on Optimism L2
              <br />
              <u>Switch to L2</u>
            </div>} />
        </div>
      )}
      {tab === 2 && (
        <div className='rounded-3xl overflow-x-auto'>
          <Table header={secondHistoryHeader} nodata={<div className='no-data'>
              Perpetual futures are available on Optimism L2
              <br />
              <u>Switch to L2</u>
            </div>} />
        </div>
      )}
    </div>
  )
}
