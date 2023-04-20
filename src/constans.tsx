import { CoinProps, ITableProps, NavLinkProps } from './models/index';
import BnbLogo from './images/bnb-logo.svg';
import EtheLogo from './images/ethe-logo.svg';
import OpLogo from './images/op-logo.svg';
import PolyLogo from './images/poly-logo.svg';
import Increase from './images/increase.svg';
import Decrease from './images/decrease.svg';
import { ChartProps } from './models/index';
import { CardProps } from './components/Card';
export const coins: CoinProps[] = [
  {
    name: 'Ethereum',
    value: 'ethereum',
    icon: EtheLogo,
    active: false,
  },
  {
    name: 'Optimism',
    value: 'optimism',
    icon: OpLogo,
    active: true,
  },
  {
    name: 'Polygon',
    value: 'polygon',
    icon: PolyLogo,
    active: false,
  },
  {
    name: 'BNB Smart Chain',
    value: 'bnb',
    icon: BnbLogo,
    active: false,
  },
];
const IconRight = () => {
  return (
    <svg
      width='16'
      height='13'
      viewBox='0 0 16 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
    >
      <path
        d='m8.436 11.594 1.33 1.292 6.004-5.909L9.861.973 8.55 2.265l3.705 3.762H.703v1.862h11.552l-3.819 3.705Z'
        fill='#787878'
      ></path>
    </svg>
  );
};
export const navLinks: NavLinkProps[] = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
        />
      </svg>
    ),
    children: [
      {
        title: 'Overview',
        link: '/dashboard',
      },
      {
        title: 'History',
        link: '/dashboard/history',
      },
      {
        title: 'Markets',
        link: '/dashboard/markets',
      },
      {
        title: 'Staking',
        link: '/dashboard/staking',
      },
    ],
  },
  {
    name: 'Perpetual',
    link: '/perpetual',
    icon: <IconRight />,
  },
  {
    name: 'Exchange',
    link: '/exchange',
    icon: <IconRight />,
  },
  {
    name: 'Leaderboard',
    link: '/leaderboard',
    icon: <IconRight />,
  },
];
export const charts: ChartProps[] = [
  { id: 1, amount: '36.052', price: '1.950', skew: Increase },
  { id: 2, amount: '36.052', price: '1.950', skew: Increase },
  { id: 3, amount: '36.052', price: '1.950', skew: Decrease },
  { id: 4, amount: '36.052', price: '1.950', skew: Decrease },
  { id: 5, amount: '36.052', price: '1.950', skew: Increase },
  { id: 6, amount: '36.052', price: '1.950', skew: Decrease },
  { id: 7, amount: '36.052', price: '1.950', skew: Increase },
  { id: 8, amount: '36.052', price: '1.950', skew: Decrease },
];
export const cardEth: CardProps[] = [
  {
    id: 1,
    title: 'ETH - USDT',
    price: '$2,362.02',
  },
  {
    id: 2,
    title: 'Side',
    price: '-',
  },
  {
    id: 3,
    title: 'Size',
    price: '-',
  },
];
export const firstTableHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Market Price',
  },
  {
    id: 2,
    title: 'Index Price',
  },
  {
    id: 3,
    title: '24H Change',
  },
  {
    id: 4,
    title: '1H Funding Rate',
  },
  {
    id: 5,
    title: 'Open Interest(L)',
  },
  {
    id: 6,
    title: 'Open Interest(S)',
  },
];
export const secondTableHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Market',
  },
  {
    id: 2,
    title: 'Side',
  },
  {
    id: 3,
    title: 'Size',
  },
  {
    id: 4,
    title: 'Leverage',
  },
  {
    id: 5,
    title: 'Unrealized P&L',
  },
  {
    id: 6,
    title: 'Avg. Entry price',
  },
  {
    id: 7,
    title: 'Liq. Price',
  },
];
export const tradeHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Date',
  },
  {
    id: 2,
    title: 'Side',
  },
  {
    id: 3,
    title: 'Price',
  },
  {
    id: 4,
    title: 'Trade Size',
  },
  {
    id: 5,
    title: 'Fees',
  },
  {
    id: 6,
    title: 'Order Type',
  },
  {
    id: 7,
    title: 'Liq. Price',
  },
];
export const orderHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Market/Type',
  },
  {
    id: 2,
    title: 'Side',
  },
  {
    id: 3,
    title: 'Size',
  },
  {
    id: 4,
    title: 'Status',
  },
  {
    id: 5,
    title: 'Action',
  },
];
export const transferHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Action',
  },
  {
    id: 2,
    title: 'Amount',
  },
  {
    id: 3,
    title: 'Date',
  },
  {
    id: 4,
    title: 'Transaction',
  },
  {
    id: 5,
    title: 'Action',
  },
];
export const marketHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Market',
  },
  {
    id: 2,
    title: 'Market Price',
  },
  {
    id: 3,
    title: '24H Change',
  },
  {
    id: 4,
    title: '1H Funding Rate',
  },
  {
    id: 5,
    title: 'Open Interest',
  },
  {
    id: 6,
    title: '24H Volumn',
  },
];
export const escowHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Date',
  },
  {
    id: 2,
    title: 'Time Util Vestable',
  },
  {
    id: 3,
    title: 'Immediately Vestable',
  },
  {
    id: 4,
    title: 'Amount',
  },
  {
    id: 5,
    title: 'Early Vest Fee',
  },
  {
    id: 6,
    title: 'Status',
  },
];
export const firstHistoryHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Date/Time',
  },
  {
    id: 2,
    title: 'Market',
  },
  {
    id: 3,
    title: 'Side',
  },
  {
    id: 4,
    title: 'Size',
  },
  {
    id: 5,
    title: 'Price',
  },
  {
    id: 6,
    title: 'P&L',
  },
  {
    id: 7,
    title: 'Fees',
  },
  {
    id: 8,
    title: 'Type',
  },
];
export const secondHistoryHeader: ITableProps[] = [
  {
    id: 1,
    title: 'Date/Time',
  },
  {
    id: 2,
    title: 'From',
  },
  {
    id: 3,
    title: 'To',
  },
  {
    id: 4,
    title: 'USD Value',
  },
];
