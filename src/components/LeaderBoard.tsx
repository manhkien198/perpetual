import React, { useState } from 'react';
import { Button } from './Button';
import Table from './Table';
import { leaderBoardHeader, secondHistoryHeader } from '../constans';

export default function LeaderBoard() {
  const [activeTable, setActiveTable] = useState('top');
  return (
    <>
      <div className='flex justify-between items-center gap-2 mb-4 md:flex-nowrap flex-wrap'>
        <Button
          top='Top'
          center
          active={activeTable === 'top'}
          onClick={() => setActiveTable('top')}
        />
        <Button
          top='Bottom'
          center
          active={activeTable === 'bottom'}
          onClick={() => setActiveTable('bottom')}
        />
        <input
          type='text'
          className='rounded-2xl gray-border bg-transparent py-3 grow px-6 text-white outline-none'
          placeholder='Search...'
        />
      </div>
      <div className='overflow-x-auto rounded-3xl'>
        {activeTable === 'top' && (
          <Table title='Top Traders' header={leaderBoardHeader} fontSize={13} />
        )}
        {activeTable === 'bottom' && (
          <Table
            title='Bottom Traders'
            header={leaderBoardHeader}
            fontSize={13}
          />
        )}
      </div>
    </>
  );
}
