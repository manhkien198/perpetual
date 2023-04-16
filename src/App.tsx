import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import MainContent from './components/MainContent';
import RightSide from './components/RightSide';
import { firstTableHeader } from './constans';
import { ITableProps } from './models';
import Circle from './images/circle.svg';
import Switch from './images/switch.svg';
import Arrow from './images/arrow.svg';
import EtheLogo from './images/ethe-logo.svg';
import Table from './components/Table';

function App() {
  const firstBody = firstTableHeader.map((el: ITableProps) => ({
    ...el,
    title: '-',
  }));
  return (
    <div className='bg-[#1E1E1E]  px-[28px] pb-[44px] pt-4 overflow-hidden'>
      <Header />
      <div className='flex gap-6 items-start justify-between flex-wrap md:flex-nowrap'>
        <div className='rounded-3xl bg-linear-gray py-3 px-4 mb-6'>
          <div className='flex gap-3 items-center w-[330px]'>
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
        </div>
        <div className='overflow-x-auto rounded-3xl xl:block hidden'>
          <Table header={firstTableHeader} body={firstBody} />
        </div>
        <div className='badge-purple flex justify-between items-center  py-3 px-4 rounded-3xl mb-4 2xl:w-[448px] sm:w-[400px]'>
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
        <div className='hidden xl:inline-grid 2xl:col-span-1 rounded-3xl bg-[rgba(255, 255, 255, 0.05)]'>
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
