import React from 'react';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/../mockupdb1.json';
import { COLUMNS } from '@/components/Table/GapTable/columns';

type ExampleProps = {};

const GapTable1: React.FC<ExampleProps> = () => {
  const recentRegistrationData = MOCK_DATA.pdfupload.gap_info.recent_registration;

  const tableProps: TableProps = {
    tableData: recentRegistrationData,
    tableColumns: COLUMNS,
    maxHeight: '200px',
    disableScroll: true,
    width: ['120px', '180px', '116px', '135px', '377px'],
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
};

export default GapTable1;
