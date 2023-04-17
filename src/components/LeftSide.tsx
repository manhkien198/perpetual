import { charts } from '../constans';
import { ChartProps } from '../models';

export default function LeftSide() {
  return (
    <div className='flex flex-col w-[330px] xl:w-full'>
      <div className='relative h-12 mb-7'>
        <div className='absolute text-white grid grid-cols-3 w-full'>
          <p className='col-span-1'>50%</p>
          <p className='col-span-1 text-center'>Skew</p>
          <p className='col-span-1 text-right'>50%</p>
        </div>
        <div className=' absolute top-[45px] grid grid-cols-2 w-full'>
          <div className='green-progress col-span-1'></div>
          <div className='red-progress col-span-1'></div>
        </div>
      </div>
      <div className='rounded-3xl gray-bg grow'>
        <div className='badge-purple rounded-3xl py-3 px-10 2xl:py-6 text-white text-center font-bold xl:text-base 2xl:text-xl'>
          Trade History
        </div>
        <div>
          <table className='w-full table-auto'>
            <thead className='border-b border-b-gray'>
              <tr className='color-gray font-bold text-base text-left'>
                <th className='pl-4 pr-2 py-4'>Amount</th>
                <th className='px-2 py-4'>Price</th>
                <th className='pl-4 pr-2 py-4'>Skew</th>
              </tr>
            </thead>
            <tbody className='left-body'>
              {charts.map((el: ChartProps) => (
                <tr key={el.id} className={`p-4 text-white`}>
                  <td className='pl-4 pr-2 py-4'>{el.amount}</td>
                  <td className='px-2 py-4'>{el.price}</td>
                  <td className='pl-4 pr-2 py-4'>
                    <img src={el.skew} alt='chart' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
