import React from 'react';
import { TableCell, TableRow, TableSortLabel } from '@material-ui/core';
import { TableHeadFinax as TableHead } from '../style';

type Order = 'asc' | 'desc';

export interface HeadCell {
  id: string;
  label: string;
  center?: boolean;
  viewCheckbox?: boolean;
  order?: boolean;
  width?: string | '';
  numeric?: boolean;
  disablePadding?: boolean;
}

interface ITableHeadProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string;
  headCells: HeadCell[];
}

const TableHeadFinax: React.FC<ITableHeadProps> = ({ order, orderBy, onRequestSort, headCells }: ITableHeadProps) => {
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(({ id, center = false, label, order: orderCheck = false, width = '' }: HeadCell) => (
          <TableCell
            key={id}
            align={center ? 'center' : 'left'}
            sortDirection={orderBy === id ? order : false}
            width={width}
          >
            {orderCheck ? (
              <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : 'asc'}
                onClick={createSortHandler(id)}
              >
                {label}
                {orderBy === id ? <span>{order === 'desc' ? '' : ''}</span> : null}
              </TableSortLabel>
            ) : (
              label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadFinax;
