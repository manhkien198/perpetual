import { MouseEventHandler, useState } from 'react';
import { Button } from './Button';

export default function Staking() {
  const [active, setActive] = useState('staking')
  return (
    <div className='flex flex-col gap-[100px] font-mono'>
      <div>
       <div className='flex justify-between items-center w-full mb-4'>
       <h3 className='text-[#49B080] text-[21px]'>STAKING DASHBOARD</h3>
       <button className='gray-border py-2 px-4 rounded-3xl text-[17px]'>Staking Docs</button>
       </div>
        <div className="grid grid-cols-3 gap-4">
          <div className='col-span-3 md:col-span-1'>
          <Card topLeft='Liquid' bottomLeft='0.00' topRight='Escow' bottomRight='0.00'/>
          </div>
          <div className='col-span-3 md:col-span-1'>
          <Card topLeft='Liquid' bottomLeft='0.00' topRight='Escow' bottomRight='0.00'/>
          </div>
          <div className='col-span-3 md:col-span-1'>
          <Card topLeft='Liquid' bottomLeft='0.00' topRight='Escow' bottomRight='0.00'/>
          </div>
          
        </div>
      </div>
       <div>
       <div className='flex justify-start items-center gap-2'>
        <Button top={<p>Staking</p>} active={active==='staking'} center onClick={()=>setActive('staking')}/>
        <Button top={<p>Escow</p>} active={active==='escow'} center  onClick={()=>setActive('escow')}/>
        <Button top={<p>Trading Rewards</p>} active={active==='trading'} center onClick={()=>setActive('trading')}/>
        <Button top={<p>Redemption</p>} active={active==='redemption'} center onClick={()=>setActive('redemption')}/>
        </div>
        {active==='staking'&&<p>Staking</p>}
        {active==='escow'&&<p>escow</p>}
        {active==='trading'&&<p>trading</p>}
        {active==='redemption'&&<p>redemption</p>}
       </div>
    </div>
  )
}
const Card=({topLeft,bottomLeft,topRight,bottomRight,onClickLeft,onClickRight}:{topLeft:string;bottomLeft:string;topRight:string;bottomRight:string;onClickLeft?: MouseEventHandler<HTMLButtonElement> | undefined;onClickRight?: MouseEventHandler<HTMLButtonElement> | undefined}) => {
  return(
    <div className='grid grid-cols-2 w-full'>
    <button className="gray-border rounded-3xl p-[30px] col-span-1 rounded-r-none" onClick={onClickLeft}>
      <div className="flex flex-col gap-[10px] text-left">
        <p className='text-[#787878]'>{topLeft}</p>
        <p className='text-[#49B080] text-[26px]'>{bottomLeft}</p>
      </div>
    </button>
    <button className="gray-border-right rounded-3xl p-[30px] col-span-1 rounded-l-none" onClick={onClickRight}>
    <div className="flex flex-col gap-[10px] text-left">
        <p className='text-[#787878]'>{topRight}</p>
        <p className='text-[#49B080] text-[26px]'>{bottomRight}</p>
      </div>
    </button>
    </div>
  )
}