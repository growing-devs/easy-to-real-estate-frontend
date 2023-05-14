import React from 'react';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/components/Table/MOCK_DATA3.json';
import { COLUMNS } from '@/components/Table/columns3';

type ExampleProps = {};

const Eultable2: React.FC<ExampleProps> = () => {
  const tableProps: TableProps = {
    tableData: MOCK_DATA,
    tableColumns: COLUMNS,
    maxHeight: '600px',
    disableScroll: false, // 스크롤 생김
    width: ['173px', '173px', '172px', '261px', '158px'],
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};

export default Eultable2;
