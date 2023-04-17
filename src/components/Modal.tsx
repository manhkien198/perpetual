import React, { ReactNode } from 'react';
import Close from '../images/close.svg';

export default function Modal({
  title,
  content,
  showModal,
  setShowModal,
}: {
  title: string;
  content: ReactNode;
  showModal: boolean;
  setShowModal: Function;
}) {
  return (
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 modal-container'>
      <div className='flex justify-center items-center w-full h-full'>
        <div className='text-white font-bold text-[18px]'>
          <div className='py-4 px-7 rounded-t-3xl badge-purple flex justify-between items-center'>
            <p>{title}</p>
            <img
              src={Close}
              alt='close icon'
              onClick={() => setShowModal(!showModal)}
            />
          </div>
          <div className='py-6 px-8 modal bg-black z-70'>{content}</div>
        </div>
      </div>
    </div>
  );
}
