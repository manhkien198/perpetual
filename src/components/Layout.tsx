import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../constans';
import Bar from '../images/bar.svg';
import Close from '../images/cancel.svg';
import { NavLinkProps, SibarChildProps } from '../models';
import Header from './Header';

export default function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [active, setActive] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const path=location.pathname
  const handleNavigate=(link:string)=>{
    navigate(link);
    setShowMenu(!showMenu)
  }
  useEffect(() => {
    setActive(path)
  }, [path])
  
  return (
    <div className={`px-[28px] pb-[44px] pt-4 overflow-hidden`}>
      <Header />
      <Outlet />
      {showMenu && (
        <div className='fixed z-30 bg-black inset-0 slide'>
          <div
            className={`absolute bottom-40 left-10 right-0 gap-6 text-bolder items-start flex flex-col z-50`}
          >
            {navLinks.map((el: NavLinkProps) =>
              el.children ? (
                <div key={el.link} className='w-full'>
                  <button className={`flex justify-between items-center mb-4 w-full ${showDashboard?'text-white':''} hover:text-white 2xl:px-[22px] sm:px-[10px] sm:py-1 2xl:py-2`} onClick={()=>setShowDashboard(!showDashboard)}>
                    <p>{el.name}</p>
                    <div>{el.icon}</div>
                  </button>
                  <div className='flex flex-col gap-4 justify-start'>
                  {el.children &&
                    showDashboard &&
                    el.children.map((item: SibarChildProps) => (
                      <button key={item.link} onClick={()=>handleNavigate(item.link)} className={`text-left pl-10 hover:text-white ${active===item.link?'text-white':''}`}>{item.title}</button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                onClick={()=>handleNavigate(el.link)}
                  key={el.name}
                  className={`decoration-none cursor-pointer  w-full hover:text-white 2xl:px-[22px] sm:px-[10px] sm:py-1 2xl:py-2 ${active===el.link?'text-white':''}`}
                >
                  <div className='flex justify-between items-center'>
                    <p>{el.name}</p>
                    <div>{el.icon}</div>
                  </div>
                </button>
              )
            )}
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
  );
}
