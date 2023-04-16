import React from 'react';
export interface CardProps {
  title: string;
  price: string;
  id: number;
}
export default function Card({ cards }: { cards: CardProps[] }) {
  return (
    <div className='py-4 px-6 h-[132px] flex flex-col gap-3  gray-bg rounded-3xl'>
      {cards.map((el: CardProps) => (
        <div className='flex justify-between items-center' key={el.id}>
          <p className='text-[rgba(255,255,255,0.5)]'>{el.title}</p>
          <p className='text-white'>{el.price}</p>
        </div>
      ))}
    </div>
  );
}
