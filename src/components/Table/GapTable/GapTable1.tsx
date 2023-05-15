import React from 'react';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/components/Table/GapTable/GAP_MOCK_DATA.json';
import { COLUMNS } from '@/components/Table/GapTable/columns';

type ExampleProps = {};

const Gaptable1: React.FC<ExampleProps> = () => {
  const tableProps: TableProps = {
    tableData: MOCK_DATA,
    tableColumns: COLUMNS,
    maxHeight: '200px',
    disableScroll: true, // 스크롤 없음
    width: ['120px', '180px', '116px', '135px', '377px'],
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};

export default Gaptable1;
