import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Dashboard() {
  return (
    <div className='flex justify-center items-start gap-6 text-white'>
      <div className='xl:inline-flex hidden'>
      <Sidebar />
      </div>
      <div className='grow w-full'>
        <Outlet />
      </div>
    </div>
  );
}
