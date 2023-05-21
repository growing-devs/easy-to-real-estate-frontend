import React from 'react';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/../mockupdb1.json';
import { COLUMNS } from '@/components/Table/EulTable/columns2';

type ExampleProps = {};

const Eultable13: React.FC<ExampleProps> = () => {
  const mortgageDetailData = MOCK_DATA.pdfupload.eul_info.mortgage_detail;

  const tableProps: TableProps = {
    tableData: mortgageDetailData,
    tableColumns: COLUMNS,
    maxHeight: '130px',
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
