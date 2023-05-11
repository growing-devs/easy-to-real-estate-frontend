import React from 'react';
import Table, { TableProps } from '../common/Table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

type ExampleProps = {};

const table1: React.FC<ExampleProps> = () => {
  const tableProps: TableProps = {
    tableData: MOCK_DATA,
    tableColumns: COLUMNS,
    maxHeight: '200px',
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};

export default table1;
