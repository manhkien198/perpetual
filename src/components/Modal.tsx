import { ReactNode, useEffect, useRef } from 'react';
import Close from '../images/close.svg';

export default function Modal({
  title,
  content,
  showModal,
  setShowModal,
  rounded,
  purpleHeader,
  grayBorder,
}: {
  title: string;
  content: ReactNode;
  showModal: boolean;
  setShowModal: Function;
  rounded: number;
  purpleHeader?: boolean;
  grayBorder?: boolean;
}) {
  const ref = useRef<any>(null);
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!ref.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <div className='fixed bottom-0 left-0 right-0 top-6 2xl:-top-80 bg-[rgba(0,0,0,0.5)] z-50 modal-container'>
      <div
        ref={ref}
        className={`absolute  top-0 left-1/2 -translate-x-1/2 flex justify-center items-center h-full
        `}
      >
        <div
          className={`text-white font-bold text-[18px] w-[300px] md:w-[600px] ${
            rounded && 'overflow-hidden'
          } ${grayBorder && 'gray-border'}`}
          style={{ borderRadius: rounded || 0 }}
        >
          <div
            className={`py-4 px-7 ${
              purpleHeader ? 'badge-purple' : 'bg-black-fade'
            } flex justify-between items-center`}
          >
            <p>{title}</p>
            <img
              src={Close}
              alt='close icon'
              onClick={() => setShowModal(!showModal)}
            />
          </div>
          <div
            className={`py-6 px-8 modal bg-black-fade z-70 max-h-[500px] md:max-h-fit overflow-y-auto`}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
