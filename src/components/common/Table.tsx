import React, { useMemo } from 'react';
import { useTable, Column } from 'react-table';
import styled from '@emotion/styled';

export interface TableProps {
  tableData: any[]; // 테이블에 표시할 데이터 배열
  tableColumns: Column<any>[]; // 테이블에 표시할 컬럼 설정 배열
  maxHeight?: string; // 테이블 높이 설정 (default: '200px')
}

const Table: React.FC<TableProps> = ({ tableData, tableColumns, maxHeight = '200px' }) => {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const tableInstance = useTable({ columns, data });

  return (
    <TableWrapper maxHeight={maxHeight}>
      <table>
        <TableHeader>
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </TableHeader>
        <TableBody {...tableInstance.getTableBodyProps()}>
          {tableInstance.rows.map((row) => {
            tableInstance.prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </tr>
            );
          })}
        </TableBody>
      </table>
    </TableWrapper>
  );
};

Table.defaultProps = {
  maxHeight: '200px',
};

export default Table;

const TableWrapper = styled.div<{ maxHeight?: string }>`
  margin: 1rem;
  max-height: ${({ maxHeight }) => maxHeight || '200px'};
  overflow-y: scroll;
`;

const TableHeader = styled.thead`
  background-color: #e6e6e6;
  color: #000;
  font-weight: bold;
  border-top: 0.5px solid #ccc;
  border-bottom: 0.5px solid #ccc;
`;

const TableBody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: #e0e6f8;
  }
  tr:nth-of-type(odd) {
    background-color: #fff;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
`;
