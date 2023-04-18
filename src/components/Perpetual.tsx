import 'animate.css';
import { useState } from 'react';
import { firstTableHeader } from '../constans';
import Arrow from '../images/arrow.svg';
import Circle from '../images/circle.svg';
import EtheLogo from '../images/ethe-logo.svg';
import Switch from '../images/switch.svg';
import { ITableProps } from '../models';
import LeftSide from './LeftSide';
import MainContent from './MainContent';
import RightSide from './RightSide';
import Table from './Table';

function Perpetual() {
  const firstBody = firstTableHeader.map((el: ITableProps) => ({
    ...el,
    title: '-',
  }));
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <div className='grid grid-cols-4 gap-6'>
        <button
          className='col-span-4 z-50 xl:col-span-1 rounded-3xl bg-linear-gray py-3 px-4 mb-6  w-[330px] xl:w-full relative'
          onClick={() => setShowDropDown(!showDropDown)}
        >
          {showDropDown && (
            <div className='absolute top-20 left-0 p-6 z-70 bg-[black] rounded-2xl text-white w-full'>
              No Data
            </div>
          )}
          <div className='flex gap-3 items-center'>
            <img src={EtheLogo} alt='Ethereum logo' className='w-10 h-10' />
            <div className='flex flex-col'>
              <h3 className='text-white mb-0 xl:text-base 2xl:text-[18px]'>
                ETH - USDT
              </h3>
              <p className='text-[rgba(255,255,255,0.05)] text-[14px]'>
                Perpetual
              </p>
            </div>
            <div className='flex items-center justify-end grow'>
              <img src={Arrow} alt='arrow down' className='w-[7px] h-[10px]' />
            </div>
          </div>
        </button>
        <div className='col-span-2 overflow-x-auto rounded-3xl xl:block hidden'>
          <Table header={firstTableHeader} body={firstBody} />
        </div>
        <div className='col-span-4 w-full xl:col-span-1 badge-purple flex justify-between items-center  py-3 px-4 rounded-3xl mb-4'>
          <div className='flex gap-2 items-center text-white whitespace-nowrap'>
            <img src={Circle} alt='circle' />
            Isolated Margin
          </div>
          <div className='flex items-center gap-2 text-white'>
            $00.00
            <img src={Switch} alt='Switch' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-6'>
        <div className='hidden xl:inline-grid 2xl:col-span-1 rounded-3xl bg-[rgba(255, 255, 255, 0.05)]'>
          <LeftSide />
        </div>
        <div className='col-span-5 xl:col-span-2'>
          <MainContent />
        </div>
        <div className='col-span-5 xl:col-span-1 rounded-3xl bg-[rgba(255, 255, 255, 0.05)]'>
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default Perpetual;
