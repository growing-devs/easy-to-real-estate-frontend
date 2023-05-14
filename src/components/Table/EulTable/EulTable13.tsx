import React from 'react';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/components/Table/MOCK_DATA2.json';
import { COLUMNS } from '@/components/Table/columns2';

type ExampleProps = {};

const Eultable13: React.FC<ExampleProps> = () => {
  const tableProps: TableProps = {
    tableData: MOCK_DATA,
    tableColumns: COLUMNS,
    disableScroll: true,
    width: ['188px', '188px', '188px', '188px', '188px'],
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};

export default Eultable13;
