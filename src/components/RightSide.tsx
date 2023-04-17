import { useState } from 'react';
import Out from '../images/Out.svg';
import Down from '../images/arrow.svg';
import UpDown from '../images/up-down.svg';
import XBadge from './XBadge';
export default function RightSide() {
  const [percent, setPercent] = useState(20);
  const [x, setX] = useState('2.0x');
  const [activeGreenButton, setActiveGreenButton] = useState('long');
  return (
    <div className='flex flex-col'>
      <div className='px-6'>
        <div className='flex flex-col gap-4 mb-[58px]'>
          <div className='grid grid-cols-2'>
            <p className='font-medium col-span-1 gray-text font-base'>
              Available Margin:
            </p>
            <p className='text-right font-bold col-span-1 text-white font-base'>
              $0.00
            </p>
          </div>
          <div className='grid grid-cols-2'>
            <p className='font-medium col-span-1 gray-text font-base'>
              Buying Power::
            </p>
            <p className='text-right font-bold col-span-1 text-white font-base'>
              $0.00
            </p>
          </div>
          <div className='grid grid-cols-2'>
            <p className='font-medium col-span-1 gray-text font-base'>
              Margin Usage::
            </p>
            <p className='text-right font-bold col-span-1 text-white font-base'>
              0.00%
            </p>
          </div>
        </div>
        <div className='px-3 flex gap-2 items-center mb-[34px]'>
          <button
            className={`px-[33px] 2xl:px-[66px] py-2 text-white hover:opacity-80 ${
              activeGreenButton === 'long' ? 'green-badge' : ''
            }`}
            onClick={() => setActiveGreenButton('long')}
          >
            LONG
          </button>
          <button
            className={`px-[33px] 2xl:px-[66px] py-2 text-white hover:opacity-80 ${
              activeGreenButton === 'short' ? 'green-badge' : ''
            }`}
            onClick={() => setActiveGreenButton('short')}
          >
            SHORT
          </button>
        </div>
        <p className='text-white font-medium text-base mb-4'>
          Amount -<span className='opacity-50'> Set order size</span>
        </p>
        <div className='input-rounded w-full flex justify-between items-center py-3 px-4 text-white opacity-50 mb-6'>
          <p>0.00</p>
          <div className='flex items-center gap-2'>
            ETH
            <img src={UpDown} alt='arrow' />
          </div>
        </div>
        <p className='text-white font-medium text-base mb-6'>
          Leverage -<span className='opacity-50'> Up To 10.00X</span>
        </p>
        <div className='w-full mb-6'>
          <input
            id='range'
            type='range'
            min='0'
            max='100'
            className='w-full'
            value={percent}
            onChange={(e) => setPercent(parseInt(e.target.value))}
          />
        </div>
        <div className='flex justify-between items-center gap-4 w-full mb-6'>
          <div className='flex justify-center items-center gap-4'>
            <input
              type='text'
              className='bg-transparent rounded-3xl py-[6px] px-4 border w-[113px] border-green-400 outline-none font-bold text-base text-white'
              value={x}
            />
            <p className='text-[#85FF83]'>LONG</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button onClick={() => setX('2.0x')}>
              <XBadge count='x2' active={x === '2.0x'} />
            </button>
            <button onClick={() => setX('5.0x')}>
              <XBadge count='x5' active={x === '5.0x'} />
            </button>
            <button onClick={() => setX('10.0x')}>
              <XBadge count='x10' active={x === '10.0x'} />
            </button>
          </div>
        </div>
        <p className='text-white font-medium text-base mb-4'>
          Manage -<span className='opacity-50'> Adjust your position</span>
        </p>
        <button className='rounded-[45px] border gray-border text-center w-full py-3 px-4 text-white hover:opacity-100 hover:gray-bg opacity-50 mb-6'>
          Place Order
        </button>
        <div className='w-full h-[1px] mt-6 bg-[#ffffff1a] mb-6'></div>
        <div className='w-full'>
          <div className='flex justify-between items-center text-white mb-4'>
            <div className='flex justify-center items-center gap-2 opacity-50'>
              Total Fees
              <img src={Down} alt='arrow' />
            </div>
            <p>$0.00</p>
          </div>
          <div className='flex justify-between items-center text-white mb-4'>
            Trading Reward:
            <p className='text-red-500 font-base font-semi-bold'>
              NOT ELIGIBLE
            </p>
          </div>
          <div className='flex justify-between items-center font-medium text-base text-white'>
            <p className='opacity-50'>
              Stake $ZKVAULT to start earning rewards
            </p>
            <img src={Out} alt='out icon' />
          </div>
        </div>
      </div>
    </div>
  );
}
