import { useState } from 'react';
import { cardEth, orderHeader, secondTableHeader, tradeHeader } from '../constans';
import Oder from '../images/Order.svg';
import Trade from '../images/Time_atack.svg';
import Calculator from '../images/calculator.svg';
import Position from '../images/position.svg';
import Share from '../images/share.svg';
import Tranfer from '../images/transfer.svg';
import { Badge } from './Badge';
import Card from './Card';
import Table from './Table';
import Modal from './Modal';
const Row = ({
  title1,
  title2,
  value1,
  value2,
}: {
  title1: string;
  title2: string;
  value1: string;
  value2: string;
}) => {
  return (
    <div className='grid grid-cols-2 gap-7 w-auto'>
      <div className='col-span-2 md:col-span-1 flex flex-col justify-center items-start'>
        <p className='text-white opacity-50'>{title1}</p>
        <div className='uppercase border border-gray rounded-3xl w-[237px] py-3 px-4 text-white opacity-50 mb-6'>
          {value1}
        </div>
      </div>
      <div className='col-span-2 md:col-span-1 flex flex-col justify-center items-start'>
        <p className='text-white opacity-50'>{title2}</p>
        <div className='uppercase border border-gray rounded-3xl w-[237px] py-3 px-4 text-white opacity-50 mb-6'>
          {value2}
        </div>
      </div>
    </div>
  );
};
const MiniCard = ({
  name,
  value,
  success,
  danger,
}: {
  name: string;
  value: string;
  success?: boolean;
  danger?: boolean;
}) => {
  return (
    <div className='w-full rounded-3xl gray-bg py-3 px-4 flex flex-col items-start font-medium text-sm'>
      <p>{name}</p>
      <p
        className={`${
          success ? 'text-green-500' : danger ? 'text-red-500' : 'text-white'
        }`}
      >
        {value}
      </p>
    </div>
  );
};
const Content = () => {
  return (
    <>
      <p className='text-white font-medium text-sm mb-2'>Entry Price:</p>
      <div className='input-rounded w-full py-3 px-4 text-white opacity-50 mb-6'>
        1993.5
      </div>
      <Row title1='Exit Price:' title2='Gain %:' value1='0.00' value2='0.00' />
      <Row title1='Stop Loss:' title2='Loss %:' value1='0.00' value2='0.00' />
      <Row
        title1='Postion Size:'
        title2='Postion Size:'
        value1='0.00'
        value2='0.00'
      />
      <div className='flex gap-2 justify-between items-center my-[34px]'>
        <div className='green-badge w-full text-center py-2 text-white'>
          LONG
        </div>
        <div className='w-full text-center py-2 text-white'>SHORT</div>
      </div>
      <div className='flex items-center gap-4'>
        <MiniCard name='Exit PnL' value='$0' success />
        <MiniCard name='Stop PnL' value='$0' danger />
        <MiniCard name='R:R' value='$0' />
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex justify-between items-center'>
          <p className='text-white opacity-60 font-medium text-base'>
            Entry Price
          </p>
          <p className='text-white font-semibold text-base'>
            <span className='text-green-500'>Long, </span>Market
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-white opacity-60 font-medium text-base'>
            Take Profit:
          </p>
          <p className='text-white font-semibold text-base'>
            Set
            <span className='opacity-50'> at</span>
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-white opacity-60 font-medium text-base'>
            Stop Loss:
          </p>
          <p className='text-white font-semibold text-base'>
            Set
            <span className='opacity-50'> at</span>
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-white opacity-60 font-medium text-base'>Size:</p>
          <p className='text-white font-semibold text-base opacity-50'>
            ETH - USDT
          </p>
        </div>
      </div>
    </>
  );
};
export default function MainContent() {
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState('position')
  return (
    <div className='md:flex md:flex-col'>
      {showModal && (
        <Modal
          title='Profit Calculator'
          content={<Content />}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div className='h-[400px]'></div>
      <div className='flex justify-between items-center mb-7 gap-6 flex-wrap 2xl:flex-nowrap'>
        <div className='grid-cols-4 grid gap-3'>
          <button className='md:col-span-1 col-span-2 hover:opacity-80' onClick={()=>setTab('position')}>
            <Badge icon={Position} active={tab==='position'} title='Position' />
          </button>
          <button className='md:col-span-1 col-span-2 hover:opacity-80' onClick={()=>setTab('orders')}>
            <Badge icon={Oder} active={tab==='orders'} title='Oders' />
          </button>
          <button className='md:col-span-1 col-span-2 hover:opacity-80' onClick={()=>setTab('trades')}>
            <Badge icon={Trade} active={tab==='trades'} title='Trades' />
          </button>
          <button className='md:col-span-1 col-span-2 hover:opacity-80' onClick={()=>setTab('tranfers')}>
            <Badge icon={Tranfer} active={tab==='tranfers'} title='Tranfers' />
          </button>
        </div>
        <div className='gap-3 grid grid-cols-2'>
          <button
            className='md:col-span-1  hover:opacity-80'
            onClick={() => setShowModal(!showModal)}
          >
            <Badge icon={Calculator} title='Calculator' />
          </button>
          <button className='md:col-span-1  hover:opacity-80'>
            <Badge icon={Share} title='Share' reverse />
          </button>
        </div>
      </div>
      {tab==='position'&&(
        <>
        <div className='grid justify-center items-center grid-cols-3 gap-6 mb-6'>
        <div className='2xl:col-span-1 col-span-3'>
          <Card cards={cardEth} />
        </div>
        <div className='2xl:col-span-1 col-span-3'>
          <Card cards={cardEth} />
        </div>
        <div className='2xl:col-span-1 col-span-3'>
          <Card cards={cardEth} />
        </div>
      </div>
      <div className='rounded-3xl overflow-x-auto'>
        <Table header={secondTableHeader} nodata={<p className='no-data'>You have no other open positions</p>}/>
      </div></>
      )}
      {tab==='orders'&&(
        <div className='rounded-3xl overflow-x-auto'>
        <Table header={orderHeader} nodata={<NoData/>}/>
      </div>
      )}
      {tab==='trades'&&(
        <div className='rounded-3xl overflow-x-auto'>
        <Table header={tradeHeader} nodata={<NoData/>}/>
      </div>
      )}
      {tab==='tranfers'&&(
        <div className='rounded-3xl overflow-x-auto'>
        <Table header={secondTableHeader} nodata={<NoData/>}/>
      </div>
      )}
    </div>
  );
}
const NoData=()=>{
  return(
    <div>
      Perpetual futures are available on Optimism L2
      <br/>
<u>Switch to L2</u>
    </div>
  )
}