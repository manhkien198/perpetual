import { ReactNode } from 'react';

export interface ChartProps {
  amount: string;
  price: string;
  skew: string;
  id: number;
}
export interface NavLinkProps {
  name: string;
  link: string;
  children?: SibarChildProps[];
  icon?: ReactNode;
}
export interface CoinProps {
  name: string;
  value: string;
  icon: string;
  active: boolean;
}
export interface ITableProps {
  id: number;
  title: string;
}
export interface SibarChildProps {
  title: string;
  link: string;
}
export interface TokenProps{
  id:number;
  name:string;
  image:string
}