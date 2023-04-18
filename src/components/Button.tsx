import { MouseEventHandler, ReactNode } from 'react';

export const Button = ({
    top,
    bottom,
    active,
    fullWidth,
    onClick,
    center,
  }: {
    top: ReactNode;
    fullWidth?: boolean;
    bottom?: string;
    active: boolean;
    center?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  }) => {
    return (
      <button
        className={`py-[10px] px-[14px] rounded-[10px] gray-border hover:bg-gray-800 ${
          fullWidth ? 'w-full' : ''
        }`}
        onClick={onClick}
      >
        <div
          className={`flex flex-col ${center ? 'text-center' : 'items-start'} ${
            active ? 'text-white' : 'text-bolder'
          }`}
        >
          {top}
          {bottom && (
            <p
              className={`text-[18px] ${
                active ? 'text-[#49B080]' : 'text-bolder'
              }`}
            >
              {bottom}
            </p>
          )}
        </div>
      </button>
    );
  };