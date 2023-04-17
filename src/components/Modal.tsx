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
      <div className='absolute  top-0 left-1/2 -translate-x-1/2 flex justify-center items-center w-full h-full'>
        <div className='text-white font-bold text-[18px]'>
          <div className='py-4 px-7 badge-purple flex justify-between items-center  rounded-t-3xl'>
            <p>{title}</p>
            <img
              src={Close}
              alt='close icon'
              onClick={() => setShowModal(!showModal)}
            />
          </div>
          <div className='py-6 px-8 modal bg-black z-70  max-h-[500px] overflow-y-auto rounded-b-3xl'>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
