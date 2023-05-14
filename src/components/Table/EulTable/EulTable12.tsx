import React from 'react';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/components/Table/MOCK_DATA1.json';
import { COLUMNS } from '@/components/Table/columns1';

type ExampleProps = {};

const Eultable12: React.FC<ExampleProps> = () => {
  const tableProps: TableProps = {
    tableData: MOCK_DATA,
    tableColumns: COLUMNS,
    disableScroll: true,
    width: ['182px', '182px', '182px'],
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};

export default Eultable12;