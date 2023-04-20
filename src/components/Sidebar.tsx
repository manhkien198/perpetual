import React from 'react';
import SideBarCol from './SideBarCol';

export default function Sidebar() {
  return (
    <div className='flex flex-col gap-14 w-[200px]'>
      <SideBarCol
        title='Trading'
        children={[
          { title: 'Overview', link: '/dashboard' },
          { title: 'History', link: '/dashboard/history' },
          { title: 'Markets', link: '/dashboard/markets' },
        ]}
      />
      <SideBarCol
        title='Community'
        children={[{ title: 'Staking', link: '/dashboard/staking' }]}
      />
    </div>
  );
}
