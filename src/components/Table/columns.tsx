import { Column } from 'react-table';

export const COLUMNS: Column<{
  contract_date: string;
  transaction: string;
  price: string;
  floor: string;
}>[] = [
  {
    Header: '계약일',
    accessor: 'contract_date',
  },
  {
    Header: '거래',
    accessor: 'transaction',
  },
  {
    Header: '가격',
    accessor: 'price',
  },
  {
    Header: '층',
    accessor: 'floor',
  },
];
