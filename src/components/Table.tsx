import React, { ReactNode } from 'react';
import { ITableProps } from '../models';
import Loading from './Loading';

export default function Table({
  header,
  body,
  nodata,
  checkbox,
  fontSize,
  loading,
  title,
}: {
  header: ITableProps[];
  body?: ITableProps[];
  nodata?: string | ReactNode;
  checkbox?: boolean;
  fontSize?: number;
  loading?: boolean;
  title?: string;
}) {
  return (
    <table className='w-full gray-bg border-none border-separate border-spacing-0 rounded-3xl gray-border'>
      {title ? (
        <thead className='rounded-3xl'>
          <tr>
            <td
              colSpan={header.length}
              className='pl-3 py-2 border-b border-[#383636] w-full text-bolder font-normal'
              style={{ fontSize }}
            >
              {title}
            </td>
          </tr>
          <tr>
            {checkbox && (
              <th className='pl-4'>
                <input type='checkbox' />
              </th>
            )}
            {header.map((el: ITableProps) => (
              <th
                key={el.id}
                style={{ fontSize }}
                className={`whitespace-nowrap border-b border-[#383636] text-left font-normal text-bolder first:pl-3 first:pr-4 last:pr-3 last:pl-4 px-4 py-2 2xl:px-[31px] 2xl:py-[20px] first:rounded-bl-3xl last:rounded-br-3xl`}
              >
                {el.title}
              </th>
            ))}
          </tr>
        </thead>
      ) : (
        <thead className='rounded-3xl'>
          <tr className='text-white gray-bg'>
            {checkbox && (
              <th className='pl-4'>
                <input type='checkbox' />
              </th>
            )}
            {header.map((el: ITableProps) => (
              <th
                key={el.id}
                style={{ fontSize }}
                className='whitespace-nowrap border-b border-[#383636] text-bolder first:pl-3 first:pr-4 last:pr-3 last:pl-4 px-4 py-2 2xl:px-[31px] 2xl:py-[20px] first:rounded-bl-3xl last:rounded-br-3xl'
              >
                {el.title}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {!loading ? (
          body ? (
            <tr>
              {body.map((el: ITableProps) => (
                <td
                  key={el.id}
                  style={{ fontSize }}
                  className='text-white text-center py-2  last:rounded-bl-3xl last:rounded-br-3xl'
                >
                  {el.title}
                </td>
              ))}
            </tr>
          ) : (
            <tr>
              <td
                style={{ fontSize }}
                className='py-2 text-white text-center font-bold text-base h-[100px]'
                colSpan={header.length}
              >
                {nodata}
              </td>
            </tr>
          )
        ) : (
          <Loading />
        )}
      </tbody>
    </table>
  );
}
