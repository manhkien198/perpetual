import React from 'react';
import { ITableProps } from '../models';

export default function Table({
  header,
  body,
}: {
  header: ITableProps[];
  body?: ITableProps[];
}) {
  return (
    <table className='w-full gray-bg border-none border-separate border-spacing-0 rounded-3xl'>
      <thead className='rounded-3xl'>
        <tr className='text-white opacity-80 gray-bg'>
          {header.map((el: ITableProps) => (
            <th
              key={el.id}
              className='whitespace-nowrap first:pl-3 first:pr-4 last:pr-3 last:pl-4 px-4 py-2 2xl:px-[31px] 2xl:py-[20px] first:rounded-bl-3xl last:rounded-br-3xl'
            >
              {el.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body ? (
          <tr>
            {body.map((el: ITableProps) => (
              <td
                key={el.id}
                className='text-white text-center py-2  last:rounded-bl-3xl last:rounded-br-3xl'
              >
                {el.title}
              </td>
            ))}
          </tr>
        ) : (
          <tr>
            <td
              className='py-2 text-white text-center font-bold text-base no-data h-[100px]'
              colSpan={header.length}
            >
              You have no other open positions
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
