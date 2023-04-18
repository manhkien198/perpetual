import React, { MouseEventHandler, ReactNode, useState } from 'react';
import Table from './Table';
import { marketHeader, secondTableHeader } from '../constans';
import { Button } from './Button';

export default function Overview() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className='flex gap-4 flex-col'>
      <div className='h-[200px] rounded-[10px] gray-border'>
        <p className='gray-text-bolder text-base'>Portfolio Value</p>
        <p className='ml-[26px] text-[27px]'>$0.00</p>
      </div>
      <div className='flex justify-start items-center gap-4'>
        <Button
          onClick={() => setActiveButton(1)}
          top={
            <div className='flex justify-start items-center gap-2'>
              <svg
                width='11'
                height='11'
                viewBox='0 0 11 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                type='isolated_margin'
              >
                <circle cx='5.5' cy='5.5' r='5' stroke='#ECE8E3'></circle>
              </svg>
              Isolated Margin
            </div>
          }
          bottom='$0.00'
          active={activeButton === 1}
        />
        <Button
          onClick={() => setActiveButton(2)}
          top={<p>Spot Balances</p>}
          bottom='$0.00'
          active={activeButton === 2}
        />
      </div>
      <Button
        top={
          <div className='flex justify-center items-center'>
            Futures will be live on April 1,2023.
            <svg
              width='10'
              height='10'
              viewBox='0 0 7 7'
              fill='#ECE8E3'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              className='sc-1b0f3b65-1 bCWgOt'
            >
              <path d='M4.862 1.768.407 6.212l.77.77L5.61 2.527V5.64h1.067V.701H1.815v1.067h3.047Z'></path>
            </svg>
          </div>
        }
        active
        fullWidth
        center
      />
      <div className='rounded-3xl overflow-x-auto'>
        <Table
          header={secondTableHeader}
          nodata={
            <div className='no-data'>
              Perpetual futures are available on Optimism L2
              <br />
              <u>Switch to L2</u>
            </div>
          }
        />
      </div>
      <div className='flex justify-start items-center'>
        <Button top={<p>Futures Markets</p>} active center />
      </div>
      <div className='rounded-3xl overflow-x-auto'>
        <Table header={marketHeader} nodata={<p></p>} />
      </div>
    </div>
  );
}

