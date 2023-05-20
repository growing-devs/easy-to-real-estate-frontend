import React from 'react';
import styled from '@emotion/styled';
import Table, { TableProps } from '@/components/common/Table';
import MOCK_DATA from '@/../mockupdb1.json';
import { COLUMNS } from '@/components/Table/EulTable/columns';

type ExampleProps = {};

const Eultable11: React.FC<ExampleProps> = () => {
  const mortgageInfoData = MOCK_DATA.pdfupload.eul_info.mortgage_info;

  const tableProps: TableProps = {
    tableData: mortgageInfoData,
    tableColumns: COLUMNS,
    maxHeight: '120px',
    disableScroll: true,
    width: ['188px', '188px'],
  };

  const renderCell = (value: string, column: any) => {
    if (column.id === 'principal_amount_estimate') {
      return (
        <>
          {value}
          <br />
          <Button>추론 계산기</Button>
        </>
      );
    }
    return value;
  };

  return (
    <TableWrapper>
      <Table {...tableProps} renderCell={renderCell} />
    </TableWrapper>
  );
};

export default Eultable11;

const Button = styled.button`
  color: #0101df;
`;

const TableWrapper = styled.div`
  tbody tr {
    &:nth-of-type(1) {
      background-color: #ffe4e4; /* 연한 빨간색 배경 */
    }
    td:nth-child(2) {
      font-weight: bold;
      background-color: #e4f1ff; /* 연한 파란색 배경 */
    }
  }
  th {
    &:nth-of-type(1) {
      color: #ff0040; /* 담보총액/건수 텍스트 색상 */
      font-weight: bold;
    }
    &:nth-of-type(2) {
      color: #08088a; /* 원금 추론액 텍스트 색상 */
      font-weight: bold;
    }
  }
`;
