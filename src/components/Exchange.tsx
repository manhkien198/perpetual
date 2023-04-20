import React, { useState } from 'react';
import USD from '../images/sUSD.png';
import Down from '../images/arrow.svg';
import Modal from './Modal';
import { Button } from './Button';
const Content=({valueToken,setValueToken}:{valueToken:string;setValueToken:Function})=>{
  return (
    <div className='flex flex-col justify-stretch items-center'>
      <input type="text" className='rounded-3xl gray-border p-2 px-4 w-full bg-transparent outline-none' placeholder='Select Tokens' value={valueToken} onChange={(e)=>setValueToken(e.target.value)}/>
    </div>
  )
}
export default function Exchange() {
  const [valueFrom, setValueFrom] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [valueToken, setValueToken] = useState('')
  const [reverse, setReverse] = useState(false)
  return (
    <div className='flex justify-center'>
      {showModal&&(<Modal showModal={showModal} setShowModal={setShowModal} rounded={10} title='Select Token' content={<Content valueToken={valueToken} setValueToken={setValueToken}/>}/>)}
      <div className='flex flex-col justify-center items-center gap-10 w-[565px] h-fit'>
        <h3 className='text-white text-[30px] font-bold'>Spot Exchange</h3>
        <div className={`rounded-3xl p-8 gray-border w-full flex flex-col justify-center ${reverse?'flex-col-reverse':''} gap-10`}>
          <div className='flex items-start gap-8'>
            <div className='flex flex-col gap-4'>
              <p className='text-[#49B080] ml-2'>From</p>
              <div className='rounded-3xl gray-border p-3 w-[290px]  h-[90px]'>
                <div className='flex justify-between items-center'>
                  <input
                    type='number'
                    placeholder='0.000'
                    value={valueFrom}
                    onChange={(e) => setValueFrom(e.target.value)}
                    className='text-white font-mono w-full text-[30px] bg-transparent border-none outline-none'
                  />
                  <button
                    className='rounded-xl gray-border py-1 px-3 bg-[rgb(37,37,37)] text-[11px] text-white'
                    onClick={() => setValueFrom('0.000')}
                  >
                    Max
                  </button>
                </div>
                <p className='text-sm font-mono text-white'>$0.00</p>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-bolder text-sm ml-2'>Synthetic Synth SUSD</p>
              <button className='rounded-2xl gray-border p-3 flex justify-between items-center select hover:bg-slate-800' onClick={()=>setShowModal(!showModal)}>
                <div className='flex gap-1 justify-start items-center'>
                  <img src={USD} alt='sUSD' className='w-6 h-6' />
                  <p className='text-white text-[18px]'>sUSD</p>
                </div>
                <img src={Down} alt='down arrow' className='h-3 w-3' />
              </button>
              <div className='flex justify-between items-center'>
                <p className='text-bolder text-[13px]'>Balance:</p>
                <p className='text-sm font-mono text-white'>$0.00</p>
              </div>
            </div>
          </div>
        <div className='flex justify-center items-center'>
          <button className='w-8 h-8 rounded-full gray-border p-1 arrow-down' onClick={()=>setReverse(!reverse)}>
          <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" role="img" className="arrow"><path clipRule="evenodd" d="M6.5 1.9c.5 0 .9.4.9.9V8l1.7-1.7c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-3.2 3.3c-.2.1-.5.2-.7.2s-.5-.1-.7-.2L2.6 7.6c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0L5.6 8V2.8c0-.5.4-.9.9-.9z" fill="#ece8e3" fillRule="evenodd"></path></svg>
          </button>
          </div>
          <div className='flex items-stretch gap-8'>
            <div className='flex flex-col gap-4'>
              <p className='text-[#49B080] ml-2'>Into</p>
              <div className='rounded-3xl gray-border p-3 w-[290px] h-[90px]'>
                <div className='flex justify-between items-center'>
                  <input
                    type='number'
                    placeholder='0.000'
                    disabled
                    value={valueFrom}
                    onChange={(e) => setValueFrom(e.target.value)}
                    className='text-white font-mono w-full text-[30px] bg-transparent border-none outline-none'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-bolder text-sm ml-2'>-</p>
              <button className='rounded-2xl gray-border p-3 flex justify-between items-center select hover:bg-slate-800' onClick={()=>setShowModal(!showModal)}>
                  <p className='text-white text-[18px] mr-4'>Select Tokens</p>
                <img src={Down} alt='down arrow' className='h-3 w-3' />
              </button>
              <div className='flex justify-between items-center'>
                <p className='text-bolder text-[13px]'>Balance:</p>
                <p className='text-sm font-mono text-white'>-</p>
              </div>
            </div>
          </div>
        </div>
        <p className='text-white text-center text-sm'>Connect your wallet to start trading</p>
        <Button top='Connect Wallet' active center fullWidth />
      </div>
    </div>
  );
}
