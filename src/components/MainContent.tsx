import { cardEth, secondTableHeader } from '../constans';
import Oder from '../images/Order.svg';
import Trade from '../images/Time_atack.svg';
import Calculator from '../images/calculator.svg';
import Position from '../images/position.svg';
import Share from '../images/share.svg';
import Tranfer from '../images/transfer.svg';
import { Badge } from './Badge';
import Card from './Card';
import Table from './Table';

export default function MainContent() {
  return (
    <div className='md:flex md:flex-col'>
      <div className='h-[400px]'></div>
      <div className='flex justify-between items-center mb-7 gap-6 flex-wrap 2xl:flex-nowrap'>
        <div className='grid-cols-4 grid gap-3'>
          <div className='md:col-span-1 col-span-2'>
            <Badge icon={Position} active title='Position' />
          </div>
          <div className='md:col-span-1 col-span-2'>
            <Badge icon={Oder} title='Oders' />
          </div>
          <div className='md:col-span-1 col-span-2'>
            <Badge icon={Trade} title='Trades' />
          </div>
          <div className='md:col-span-1 col-span-2'>
            <Badge icon={Tranfer} title='Tranfers' />
          </div>
        </div>
        <div className='gap-3 grid grid-cols-2'>
          <div className='md:col-span-1'>
            <Badge icon={Calculator} title='Calculator' />
          </div>
          <div className='md:col-span-1'>
            <Badge icon={Share} title='Share' reverse />
          </div>
        </div>
      </div>
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
        <Table header={secondTableHeader} />
      </div>
    </div>
  );
}
