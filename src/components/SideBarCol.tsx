import { Link, useLocation } from 'react-router-dom';
import { SibarChildProps } from '../models';
interface SideBarColProps {
  title: string;
  children: SibarChildProps[];
}
export default function SideBarCol({ title, children }: SideBarColProps) {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className='flex flex-col items-start'>
      <p className='text-sm uppercase text-[#4ab081] ml-3 mb-6'>{title}</p>
      <div className='flex flex-col gap-6'>
        {children.map((child: SibarChildProps) => (
          <Link
            to={child.link}
            key={child.link}
            className={`text-left text-sm hover:bg-[#ffffff7f] hover:rounded-3xl ease-in-out duration-200 py-2 px-3 ${
              pathname === child.link ? 'bg-[#ffffff7f] rounded-3xl' : ''
            }`}
          >
            {child.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
