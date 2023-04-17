import React, { DragEventHandler } from 'react';
import Dot from '../images/dot.svg';

export default function ProgressBar({
  percent,
  setPercent,
}: {
  percent: number;
  setPercent: Function;
}) {
  const handleDrag = (event: any): void => {};
  const handleDragOver = (event: any): void => {
    const el = event.target as HTMLElement;
    const rect = el.getBoundingClientRect();
    const right = rect.right;
    const left = rect.left;
    const width = right - left;
    const dotRect = event.clientX - left;
    console.log(
      'Math.round((dotRect / width) * 100) :',
      Math.round((dotRect / width) * 100)
    );
    setPercent(Math.round((dotRect / width) * 100));
  };
  return (
    <div className='h-3 relative'>
      <div
        id='draggable'
        className={`absolute -top-full`}
        style={{ left: percent }}
        onDrag={handleDrag}
      >
        <img src={Dot} alt='dot' />
      </div>
      <div
        id='droptarget'
        onDragOver={handleDragOver}
        className='h-3 progress'
      ></div>
      ;
    </div>
  );
}
