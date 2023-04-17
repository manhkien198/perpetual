import './App.css';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import MainContent from './components/MainContent';
import RightSide from './components/RightSide';
import Table from './components/Table';
import { firstTableHeader, navLinks } from './constans';
import Arrow from './images/arrow.svg';
import Circle from './images/circle.svg';
import EtheLogo from './images/ethe-logo.svg';
import Switch from './images/switch.svg';
import { ITableProps, NavLinkProps } from './models';
import Bar from './images/bar.svg';
import Close from './images/cancel.svg';
import { useState } from 'react';
import 'animate.css';

function App() {
  const firstBody = firstTableHeader.map((el: ITableProps) => ({
    ...el,
    title: '-',
  }));
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='bg-[#1E1E1E]  px-[28px] pb-[44px] pt-4 overflow-hidden'>
      <Header />
      <div className='grid grid-cols-4 gap-6'>
        <div className='col-span-4 xl:col-span-1 rounded-3xl bg-linear-gray py-3 px-4 mb-6  w-[330px] xl:w-full'>
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
        </div>
        <div className='col-span-2 overflow-x-auto rounded-3xl xl:block hidden'>
          <Table header={firstTableHeader} body={firstBody} />
        </div>
        <div className='col-span-4 xl:col-span-1 badge-purple flex justify-between items-center  py-3 px-4 rounded-3xl mb-4 2xl:w-[448px] sm:w-[400px]'>
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
          {showMenu && (
            <div className='fixed z-30 bg-black inset-0 bottom-0 slide'>
              <div
                className={`absolute bottom-40 left-10 gap-6 items-start flex flex-col`}
              >
                {navLinks.map((el: NavLinkProps) => (
                  <a
                    href={el.link}
                    key={el.name}
                    className={`text-white decoration-none 2xl:px-[22px] sm:px-[10px] sm:py-1 2xl:py-2 ${
                      el.active && 'badge-purple rounded-3xl'
                    }`}
                  >
                    {el.name}
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className=' z-50 lg:hidden border-t border-gray-400 fixed left-0 bottom-0 h-15 w-full py-2 bg-black flex justify-between items-center'>
            <div className='flex justify-center items-center gap-3'>
              <div
                className='h-12 w-12 p-2 border-r border-gray-400'
                onClick={() => setShowMenu(!showMenu)}
              >
                {showMenu ? (
                  <img src={Close} alt='close icon' />
                ) : (
                  <img src={Bar} alt='menu icon' />
                )}
              </div>
              {showMenu && <p className='text-white font-base'>Menu</p>}
            </div>
            <button className='mr-3 text-white whitespace-nowrap relative rounded-3xl bg-gradient-to-r from-[#EF5320] to-[#FF6F28] px-6 py-[10px]'>
              Connect Wallet
            </button>
          </div>
        </div>
        <div className='col-span-5 xl:col-span-1 rounded-3xl bg-[rgba(255, 255, 255, 0.05)]'>
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
