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
export const navLinks: NavLinkProps[] = [
  {
    name: 'Swap',
    link: '',
    active: false,
  },
  {
    name: 'Staking',
    link: '',
    active: false,
  },
  {
    name: 'Farming',
    link: '',
    active: false,
  },
  {
    name: 'Perpetual',
    link: '',
    active: true,
  },
  {
    name: 'Launchpad',
    link: '',
    active: false,
  },
  {
    name: 'Refernal',
    link: '',
    active: false,
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
