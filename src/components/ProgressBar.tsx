import React from 'react';
import Dot from '../images/dot.svg';

export default function ProgressBar() {
  return (
    <div className='h-3 relative'>
      <div className='absolute -top-full left-20'>
        <img src={Dot} alt='dot' />
      </div>
      <div className='h-3 progress'></div>;
    </div>
  );
}
