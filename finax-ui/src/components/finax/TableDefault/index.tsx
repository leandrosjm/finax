import React, { useState } from 'react';
import { TableBody, TableCell } from '@material-ui/core';
import { TableFinaxContainer, TableDefault as Table, TableRowFinax } from './style';
import TableHeadFinax, { HeadCell } from './TableHeadFinax';
import NoData from '../../NoData';

interface TableFinaxProps {
  id?: string;
  rows: any;
  headers: HeadCell[];
  setRows: (rows: any) => void;
}

type Order = 'asc' | 'desc';

const TableDefault: React.FC<TableFinaxProps> = ({ id, rows, headers, setRows }: TableFinaxProps) => {
  const [orderState, setOrder] = useState<Order>('asc');
  const [orderByState, setOrderBy] = useState('');

  const handleRequestSort = (_event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderByState === property && orderState === 'asc';
    const getSetOrder = isAsc ? 'desc' : 'asc';
    setOrder(getSetOrder);
    setOrderBy(property);
    const rowsUpdated = stableSort(rows as any, getComparator(getSetOrder, property));
    if (setRows) setRows(rowsUpdated);
  };

  function descendingComparator<S>(a: S, b: S, orderBy: keyof S) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (a: { [key in Key]: string }, b: { [key in Key]: string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<S>(array: Array<S>, comparator: (a: S, b: S) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [S, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    const ordered = stabilizedThis.map((el) => el[0]);
    return ordered;
  }

  return (
    <TableFinaxContainer>
      <Table id={id}>
        <TableHeadFinax
          headCells={headers}
          onRequestSort={handleRequestSort}
          orderBy={orderByState}
          order={orderState}
        />
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row: any, idx: number) => (
              <TableRowFinax
                key={`${idx + 1}`}
                onDoubleClick={() => row.onDoubleClick && row.onDoubleClick(row)}
                style={{
                  cursor: row.onDoubleClick && 'pointer',
                }}
              >
                {headers.map((col: HeadCell, idxCol: number) => (
                  <TableCell
                    key={`col-${idxCol + 1}`}
                    style={col.center ? { textAlign: 'center' } : { textAlign: 'inherit' }}
                  >
                    {typeof rows[idx][col.id] === 'function' ? (
                      rows[idx][col.id]()
                    ) : Array.isArray(rows[idx][col.id]) ? (
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {rows[idx][col.id].map((value: any) => {
                          return <li>{value}</li>;
                        })}
                      </ul>
                    ) : (
                      rows[idx][col.id]
                    )}
                  </TableCell>
                ))}
              </TableRowFinax>
            ))
          ) : (
            <TableCell colSpan={headers.length}>
              <NoData height="20" />
            </TableCell>
          )}
        </TableBody>
      </Table>
    </TableFinaxContainer>
  );
};

export default TableDefault;
