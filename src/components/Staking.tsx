import { MouseEventHandler, useState } from 'react';
import { Button } from './Button';
import RewardLogo from './RewardLogo';
import Table from './Table';
import { escowHeader } from '../constans';
import Down from '../images/arrow.svg';

export default function Staking() {
  const [active, setActive] = useState('staking');
  return (
    <div className='flex flex-col gap-[100px] font-mono'>
      <div>
        <div className='flex justify-between items-center w-full mb-4'>
          <h3 className='text-[#49B080] text-[21px]'>STAKING DASHBOARD</h3>
          <button className='gray-border py-2 px-4 rounded-3xl text-[17px]'>
            Staking Docs
          </button>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3 md:col-span-1'>
            <Card
              topLeft='Liquid'
              bottomLeft='0.00'
              topRight='Escow'
              bottomRight='0.00'
              onClickLeft={() => setActive('staking')}
              onClickRight={() => setActive('escow')}
            />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <Card
              topLeft='Liquid'
              bottomLeft='0.00'
              topRight='Escow'
              bottomRight='0.00'
              onClickLeft={() => setActive('staking')}
              onClickRight={() => setActive('escow')}
            />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <Card
              topLeft='Liquid'
              bottomLeft='0.00'
              topRight='Escow'
              bottomRight='0.00'
              onClickLeft={() => setActive('staking')}
              onClickRight={() => setActive('escow')}
            />
          </div>
        </div>
      </div>
      <div>
        <div className={`flex justify-between`}>
          <div className='flex justify-start items-center gap-2 flex-wrap'>
            <Button
              top={<p>Staking</p>}
              active={active === 'staking'}
              center
              onClick={() => setActive('staking')}
            />
            <Button
              top={<p>Escow</p>}
              active={active === 'escow'}
              center
              onClick={() => setActive('escow')}
            />
            <Button
              top={<p>Trading Rewards</p>}
              active={active === 'trading'}
              center
              onClick={() => setActive('trading')}
            />
            <Button
              top={<p>Redemption</p>}
              active={active === 'redemption'}
              center
              onClick={() => setActive('redemption')}
            />
          </div>
          {active === 'trading' && (
            <div className='rounded-3xl gray-border flex items-center justify-between gap-4 px-4 text-[10px] text-bolder'>
              <p>Epoch 0: 11/16/2022-11/23/2022</p>
              <img src={Down} alt='down icon' />
            </div>
          )}
        </div>
        {active === 'staking' && (
          <div className='mt-4 rounded-3xl p-4 gray-border w-2/5'>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col'>
                <p className='text-[15px] text-bolder'>Claimable Rewards</p>
                <div className='flex items-center gap-2'>
                  <p className='text-[#49B080] text-[26px]'>0.0000</p>
                  <RewardLogo />
                </div>
              </div>
              <div className='flex flex-col'>
                <p className='text-[15px] text-bolder'>
                  Annual Percentage Rate
                </p>
                <p className='text-[#49B080] text-[26px]'>0.00%</p>
              </div>
              <Button top={<p>Claim</p>} fullWidth active={false} center />
            </div>
          </div>
        )}
        {active === 'escow' && (
          <div className='rounded-3xl overflow-x-auto w-2/5 mt-4'>
            <Table
              header={escowHeader}
              checkbox
              fontSize={10}
              nodata={
                <div className='flex justify-start ml-4 items-center gap-6'>
                  <div className='flex flex-col items-start gap-2'>
                    <p className='text-[10px] text-bolder'>Total</p>
                    <p className='text-[11px] text-white'>0.0000 SAKAI</p>
                  </div>
                  <div className='flex flex-col items-start gap-2'>
                    <p className='text-[10px] text-bolder'>Fee</p>
                    <p className='text-[11px] text-white'>0.0000 SAKAI</p>
                  </div>
                  <button className='px-4 py-1 rounded-3xl gray-border'>
                    VEST
                  </button>
                </div>
              }
            />
          </div>
        )}
        {active === 'trading' && (
          <div className='flex items-stretch gap-4 mt-4 md:flex-nowrap flex-wrap'>
            <div className='rounded-3xl p-4 gray-border'>
              <div className='flex flex-col gap-8'>
                <div className='flex flex-col'>
                  <p className='text-[15px] text-bolder'>
                    Claimable Trading Rewards
                  </p>
                  <div className='flex items-center gap-2'>
                    <p className='text-[#49B080] text-[26px]'>0.0000</p>
                    <RewardLogo />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <p className='text-[15px] text-bolder'>
                    Time until next epoch
                  </p>
                  <p className='text-[#49B080] text-[26px]'>PENDING...</p>
                </div>
                <Button
                  top={<p>Claim</p>}
                  noDrop
                  fullWidth
                  active={false}
                  center
                />
              </div>
            </div>
            <div className='rounded-3xl p-4 gray-border w-fit'>
              <div className='flex flex-col gap-8'>
                <div className='flex items-center'>
                  <div className='flex flex-col'>
                    <p className='text-[15px] text-bolder'>
                      Futures Fees Paid: Ep.0
                    </p>
                    <div className='flex items-center gap-2'>
                      <p className='text-[#49B080] text-[26px]'>$0.00</p>
                      <RewardLogo />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[15px] text-bolder'>Estimated Reward*</p>
                    <div className='flex items-center gap-2'>
                      <p className='text-[#49B080] text-[26px]'>0.0000</p>
                      <RewardLogo />
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='flex flex-col'>
                    <p className='text-[15px] text-bolder'>
                      Total Fees in Pool: Ep.0
                    </p>
                    <div className='flex items-center gap-2'>
                      <p className='text-[#49B080] text-[26px]'>$0.00</p>
                      <RewardLogo />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-[15px] text-bolder'>
                      Estimated Reward Share*
                    </p>
                    <div className='flex items-center gap-2'>
                      <p className='text-[#49B080] text-[26px]'>0.00%</p>
                      <RewardLogo />
                    </div>
                  </div>
                </div>
                <p className='text-[13px] text-bolder max-w-[450px]'>
                  * Estimated values do not reflect the final reward value and
                  are subject to change as a result of future fees paid and
                  staked amounts by other participants.
                </p>
              </div>
            </div>
          </div>
        )}
        {active === 'redemption' && (
          <div className='grid grid-cols-2 gap-4 mt-4'>
            <div className='rounded-3xl p-4 gray-border col-span-2 md:col-span-1 flex gap-6 flex-col'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-bolder'>vSakai Vault</p>
                <p className='text-bolder text-sm'>
                  Balance: <span className='text-white'>0.0000</span>
                </p>
              </div>
              <Button active={false} top='Redeem' center fullWidth />
            </div>
            <div className='rounded-3xl p-4 gray-border col-span-2 md:col-span-1 flex gap-6 flex-col'>
              <div className='flex justify-between items-center'>
                <p className='text-sm text-bolder'>veSakai Vault</p>
                <p className='text-bolder text-sm'>
                  Balance: <span className='text-white'>0.0000</span>
                </p>
              </div>
              <Button active={false} top='Redeem' center fullWidth />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const Card = ({
  topLeft,
  bottomLeft,
  topRight,
  bottomRight,
  onClickLeft,
  onClickRight,
}: {
  topLeft: string;
  bottomLeft: string;
  topRight: string;
  bottomRight: string;
  onClickLeft?: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickRight?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <div className='grid grid-cols-2 w-full'>
      <button
        className='gray-border rounded-3xl p-[30px] col-span-1 rounded-r-none'
        onClick={onClickLeft}
      >
        <div className='flex flex-col gap-[10px] text-left'>
          <p className='text-[#787878]'>{topLeft}</p>
          <p className='text-[#49B080] text-[26px]'>{bottomLeft}</p>
        </div>
      </button>
      <button
        className='gray-border-right rounded-3xl p-[30px] col-span-1 rounded-l-none'
        onClick={onClickRight}
      >
        <div className='flex flex-col gap-[10px] text-left'>
          <p className='text-[#787878]'>{topRight}</p>
          <p className='text-[#49B080] text-[26px]'>{bottomRight}</p>
        </div>
      </button>
    </div>
  );
};
