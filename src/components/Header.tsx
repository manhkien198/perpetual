import { useEffect, useRef, useState } from 'react';
import Arrow from '../images/arrow.svg';
import LogoIcon from '../images/logo-icon.svg';
import LogoText from '../images/logo-text.svg';
import CloseIcon from '../images/close.svg';
import { CoinProps, NavLinkProps } from '../models/index';
import { coins, navLinks } from '../constans';
import { Link, NavLink } from 'react-router-dom';
export default function Header() {
  const [show, setShow] = useState(false);
  const [coin, setCoin] = useState(coins[0]);
  const [coinsList, setCoinsList] = useState(coins);
  const ref = useRef<any>(null);
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className='header lg:block hidden xl:rounded-3xl mb-[60px]'>
      <div
        className='flex md:gap-6 xl:justify-between bg-gradient-to-r from-[#1B1B27
      ] to-[#020207] xl:px-[52px] py-4 text-white sm:justify-center'
      >
        {/* left */}
        <div className='flex items-center'>
          <img
            src={LogoIcon}
            alt='logo'
            className='sm:mr- w-[49px] h-[48px] lg:mr-3'
          />
          <img src={LogoText} alt='logo' className='w-[124px] h-[16px]' />
        </div>
        {/* middle */}
        <div className='items-center flex grow'>
          {navLinks.map((el: NavLinkProps) => (
            <NavLink to={el.link} key={el.name} className={( {isActive})=>`decoration-none cursor-pointer hover:opacity-80 2xl:px-[22px] sm:px-[10px] sm:py-1 2xl:py-2 ${
              isActive&& 'badge-purple rounded-3xl'
            }`}
            >
              {el.name}
            </NavLink>
          ))}
        </div>
        {/* right */}
        <div className='flex items-center relative gap-5'>
          <div ref={ref}>
            <button
              className='relative flex items-center justify-center p-3 rounded-3xl border border-gradient-to-r from-[#1B1B27] to-[#020207]'
              onClick={() => setShow(!show)}
            >
              <img src={coin.icon} alt='coin' className='mx-3' />
              <p className='mr-3 w-[70px] truncate'>{coin.name}</p>
              <img src={Arrow} alt='arrow down' className='mr-3' />
            </button>
            {show && (
              <div className='absolute w-80 top-20 p-6 z-70 bg-[black] rounded-2xl'>
                <div className='flex items-center justify-between mb-6'>
                  <h4 className='font-bold text-xl'>Switch Networks</h4>
                  <img
                    src={CloseIcon}
                    alt='close icon'
                    onClick={() => setShow(!show)}
                  />
                </div>
                {coinsList.map((el: CoinProps) => (
                  <div
                    id={el.value}
                    className='flex items-center justify-between p-3 hover:opacity-80 cursor-pointer hover:rounded-3xl'
                    onClick={() => {
                      setCoin(el);
                      coinsList.forEach((item: CoinProps) => {
                        item.active = false;
                        if (item.value === el.value) {
                          el.active = true;
                        }
                      });
                      setCoinsList(coinsList);
                      setShow(!show);
                    }}
                  >
                    <div className='flex items-center justify-center'>
                      <img src={el.icon} alt='logo' className='mr-3' />
                      <p className='text-white font-bold text-base'>
                        {el.name}
                      </p>
                    </div>
                    {el.active && (
                      <div className='rounded-full bg-[#56D257] w-2 h-2'></div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className='whitespace-nowrap text-white relative rounded-3xl bg-gradient-to-r cursor-pointer hover:opacity-80 from-[#EF5320] to-[#FF6F28] px-6 py-[10px]'>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
