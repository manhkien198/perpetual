import React from 'react';
import UpDown from '../images/up-down.svg';
import Down from '../images/arrow.svg';
import Out from '../images/Out.svg';
import ProgressBar from './ProgressBar';
import XBadge from './XBadge';
export default function RightSide() {
  return (
    <div className='flex flex-col'>
      <div className='px-6'>
        <div className='flex flex-col gap-4 mb-[58px]'>
          <div className='grid grid-cols-2'>
            <p className='font-medium col-span-1 text-white opacity-50 font-base'>
              Available Margin:
            </p>
            <p className='font-bold col-span-1 text-center text-white font-base'>
              $0.00
            </p>
          </div>
          <div className='grid grid-cols-2'>
            <p className='font-medium col-span-1 text-white opacity-50 font-base'>
              Buying Power::
            </p>
            <p className='font-bold col-span-1 text-center text-white font-base'>
              $0.00
            </p>
          </div>
          <div className='grid grid-cols-2'>
            <p className='font-medium col-span-1 text-white opacity-50 font-base'>
              Margin Usage::
            </p>
            <p className='font-bold col-span-1 text-center text-white font-base'>
              0.00%
            </p>
          </div>
        </div>
        <div className='px-3 flex gap-2 justify-center items-center mb-[34px]'>
          <div className='green-badge px-[66px] py-2 text-white'>LONG</div>
          <div className='px-[66px] py-2 text-white'>SHORT</div>
        </div>
        <p className='text-white font-medium text-base mb-4'>
          Amount -<span className='opacity-50'> Set order size</span>
        </p>
        <div className='input-rounded w-5/6 flex justify-between items-center py-3 px-4 text-white opacity-50 mb-6'>
          <p>0.00</p>
          <div className='flex items-center gap-2'>
            ETH
            <img src={UpDown} alt='arrow' />
          </div>
        </div>
        <p className='text-white font-medium text-base mb-6'>
          Leverage -<span className='opacity-50'> Up To 10.00X</span>
        </p>
        <div className='w-5/6 mb-6'>
          <ProgressBar />
        </div>
        <div className='flex justify-between items-center gap-4 w-5/6 mb-6'>
          <div className='flex justify-center items-center gap-4'>
            <div className='rounded-3xl py-[6px] px-4 border border-green-400'>
              <p className='w-20 font-bold text-base text-white opacity-70'>
                2.0x
              </p>
            </div>
            <p className='text-[#85FF83]'>LONG</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <XBadge count='x2' active />
            <XBadge count='x5' />
            <XBadge count='x10' />
          </div>
        </div>
        <p className='text-white font-medium text-base mb-4'>
          Manage -<span className='opacity-50'> Adjust your position</span>
        </p>
        <div className='rounded-[45px] border gray-border text-center w-5/6 py-3 px-4 text-white opacity-50 mb-6'>
          Place Order
        </div>
        <div className='w-5/6 h-[1px] mt-6 bg-[#ffffff1a] mb-6'></div>
        <div className='w-5/6'>
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
